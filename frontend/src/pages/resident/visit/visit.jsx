import { useState } from "react";
import GuessCard from "../../../components/guessCard/GuessCard";
import { GeneralInput } from "../../../components/inputs/GeneralInput/GeneralInput";
import "./visit.scss";
import FilledButton from "../../../components/Buttons/Filled/FilledButton";
import ROLES from "../../../consts/roleConsts";
import StaticDropDownMenu from "../../../components/inputs/staticDropDownMenu/StaticDropDownMenu";
import { Calendar } from 'primereact/calendar';

const dummyData = [
    {
        id: "1",
        guess: "Juan Perez",
        arrival: "Unica",
        date: "19 de abril 2024 - 10:00 am a 13:00 pm",
        state: "Aprobado",
        role: "normalResident",
    },
    {
        id: "2",
        guess: "Michelle Rivas Gutierritos",
        arrival: "Unica",
        state: "Aprobado",
        date: "19 de abril 2024 - 10:00 am a 13:00 pm",
        role: "normalResident",
    },
    {
        id: "3",
        guess: "Juan Perez",
        arrival: "Unica",
        state: "Desaprobado",
        date: "19 de abril 2024 - 10:00 am a 13:00 pm",
        role: "mainResident",
    },
    {
        id: "4",
        guess: "Juan Perez",
        arrival: "Unica",
        state: "Enespera",
        date: "19 de abril 2024 - 10:00 am a 13:00 pm",
        role: "mainResident",
    }
];

const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];


const Visit = () => {
    const [email, setEmail] = useState("")
    const [horaInicio, setHoraInicio] = useState("")
    const [horaFinal, setHoraFinal] = useState("")
    const [arrival, setArrival] = useState("")
    const [typeVisit, setTypeVisit] = useState("")
    const [dateRange, setDateRange] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null);
    const [multipleDates, setMultipleDates] = useState(null);
    const getLocalRole = localStorage.getItem("dataStorage");
    const role = JSON.parse(getLocalRole);
    const [selectedDays, setSelectedDays] = useState([]);
    
    const handleDayClick = (day) => {
        if (selectedDays.includes(day)) {
          setSelectedDays(selectedDays.filter(d => d !== day));
        } else {
          setSelectedDays([...selectedDays, day]);
        }
      };

    const handlePermission = (role) => {
        if (role === ROLES.MAINRESIDENT) {
            return true;
        } else {
            return false;
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleHoraInicioChange = (e) => {
        setHoraInicio(e.target.value)
    }

    const handleHoraFinalChange = (e) => {
        setHoraFinal(e.target.value)
    }

    const handleArrivalChange = (option) => {
        setArrival(option);
    };

    const handleTypeVisitChange = (option) => {
        setTypeVisit(option);
    };

    const MapTypeArrive = (typeArrival) => {
        if (typeArrival === "Unica") {
            return "Unica"
        }

        if (typeArrival === "Multiple") {
            return "Multiple"
        }

        return "Vacio"
    }

    const MapTypeVisit = (typeVisit) => {
        if (typeVisit === "Periodica") {
            return "Periodica"
        }

        if (typeVisit === "No periodica") {
            return "No periodica"
        }

        return "Vacio"
    }

    const disableOptionTypeVisit = (arrival) => {
        if (arrival === "Unica" || arrival === "") {
            return true
        }
    }

    return (
        <div className="visit-container">
            <div className="visit-card-info-container">
                <div className="visit-card-info">
                <p>{ handlePermission(role.user.role) ? "Visitas agendadas" : "Ultimas peticiones realizadas" }</p>
                </div>
                {dummyData.map((data) => (
                    <GuessCard
                        key={data.id}
                        name={data.guess}
                        date={data.date}
                        arrival={data.arrival}
                        role={role.user.role}
                        state={data.state}
                    />
                ))}
            </div>

            <div className="form-visit-container">
                <div className="form-visit-info">
                <p>{ handlePermission(role.user.role) ? "Agendar visitas" : "Realizar peticion de visita" }</p>
                </div>

                <div className="form-input-group">
                    <GeneralInput 
                        label={"Email del visitante"}
                        onChange={handleEmailChange}
                        value={email}
                        name={"email"}
                        type={"email"}
                    /> 

                    <div className="form-visit-group">
                        <StaticDropDownMenu 
                            options={["Unica", "Multiple"]}
                            selectedOption={arrival}
                            setSelectedOption={handleArrivalChange}
                            placeHolder={"Tipo de entrada"}
                            disabled={false}
                            />
                        <StaticDropDownMenu 
                            options={["Periodica", "No periodica"]}
                            selectedOption={typeVisit}
                            setSelectedOption={handleTypeVisitChange}
                            placeHolder={"Tipo de visita"}
                            disabled={disableOptionTypeVisit(arrival)}
                            />
                    </div>
                </div>

                { MapTypeArrive(arrival) == "Multiple" ? 
                    <div className="form-multiple-options">
                    <div className="form-multiple-group">
                        { MapTypeVisit(typeVisit) == "Periodica" ?
                            <div className="form-multiple-days">
                            <p>Selecciona los dias de la visita</p>
                            <div className="form-week-days">
                                {daysOfWeek.map(day => (
                                    <button
                                        key={day}
                                        className={`day-button ${selectedDays.includes(day) ? 'selected' : ''}`}
                                        onClick={() => handleDayClick(day)}
                                        >
                                        {day}
                                    </button>
                                ))}
                            </div>
                        </div>:<></>}
            
                        { MapTypeVisit(typeVisit) == "No periodica" 
                        || MapTypeVisit(typeVisit) == "Periodica" ?
                            <div className="form-multiple-date-range">
                                <GeneralInput 
                                    label={"Hora inicio"}
                                    onChange={handleHoraInicioChange}
                                    value={horaInicio}
                                    name={"horainicio"}
                                    type={"time"}
                                /> 

                                <GeneralInput 
                                    label={"Hora final"}
                                    onChange={handleHoraFinalChange}
                                    value={horaFinal}
                                    name={"horafinal"}
                                    type={"time"}
                                /> 
                            </div>
                            :<></>
                        }
                    </div>
                </div>
                : <> </>}
                
                { MapTypeArrive(arrival) == "Unica" ?
                    <>
                        <div className="form-multiple-date-range">
                            <GeneralInput 
                                label={"Hora inicio"}
                                onChange={handleHoraInicioChange}
                                value={horaInicio}
                                name={"horainicio"}
                                type={"time"}
                            /> 

                            <GeneralInput 
                                label={"Hora final"}
                                onChange={handleHoraFinalChange}
                                value={horaFinal}
                                name={"horafinal"}
                                type={"time"}
                            /> 
                        </div>

                        <div className="form-calendar-picker">
                            <p>Selecciona el dia de la visita</p>
                            <Calendar 
                                value={selectedDate} 
                                onChange={(e) => setSelectedDate(e.value)}
                                dateFormat="yy-mm-dd" 
                                touchUI
                            /> 
                        </div>
                    </>
                : <> </>}

                { MapTypeVisit(typeVisit) == "Periodica" && MapTypeArrive(arrival) == "Multiple" ?
                    <div className="form-calendar-picker">
                        <p>Selecciona un rango de fecha de visitas</p>
                        <Calendar 
                            value={dateRange} 
                            onChange={(e) => setDateRange(e.value)}
                            dateFormat="yy-mm-dd" 
                            selectionMode="range"
                            readOnlyInput
                            touchUI
                        /> 
                    </div>
                :<></>}
                
                { MapTypeVisit(typeVisit) == "No periodica" && MapTypeArrive(arrival) == "Multiple" ?
                    <div className="form-calendar-picker">
                        <p>Fechas de visitas</p>
                        <Calendar 
                            value={multipleDates} 
                            onChange={(e) => setMultipleDates(e.value)}
                            dateFormat="yy-mm-dd" 
                            selectionMode="multiple"
                            readOnlyInput
                            touchUI
                        /> 
                    </div>
                :<></>}
                <div className="form-visit-action">
                    <FilledButton text={ handlePermission(role.user.role) ? "Agendar visita" : "Realizar peticion"} />
                </div>
            </div>
        </div>
    );
};

export default Visit;
