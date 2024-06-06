import { useState } from "react";
import GuessCard from "../../../components/guessCard/GuessCard";
import { DropdownMenu } from "../../../components/inputs/Dropdown/DropdownMenu";
import { GeneralInput } from "../../../components/inputs/GeneralInput/GeneralInput";
import "./visit.scss";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"; 
import FilledButton from "../../../components/Buttons/Filled/FilledButton";
import ROLES from "../../../consts/roleConsts";
import MultipleDatesPicker from '@ambiot/material-ui-multiple-dates-picker'

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
    const [dateRange, setDateRange] = useState([])
    const [selectedDate, setSelectedDate] = useState();
    const [multipleDates, setMultipleDates] = useState();
    const getLocalRole = localStorage.getItem("dataStorage");
    const role = JSON.parse(getLocalRole);
    const [selectedDays, setSelectedDays] = useState([]);
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }
    
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

    const handleArrivalChange = (e) => {
        setArrival(e.target.value)
    }

    const handleTypeVisitChange = (e) => {
        setTypeVisit(e.target.value)
    }

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

    console.log(selectedDays)

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
                        <DropdownMenu
                            label={"Tipo de entrada"}
                            list="arrival"
                            name="arrival"
                            defaultValue=""
                            onChange={handleArrivalChange}
                            options={[
                                { id: 1, address: "Unica" },
                                { id: 2, address: "Multiple" },
                            ]}
                        />
                        <DropdownMenu
                            label={"Repeticion de visita"}
                            list="typeVisit"
                            name="typeVisit"
                            defaultValue=""
                            onChange={handleTypeVisitChange}
                            options={[
                                { id: 1, address: "Periodica" },
                                { id: 2, address: "No periodica" },
                            ]}
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
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateCalendar
                                        value={selectedDate}
                                        onChange={(newValue) => setSelectedDate(newValue)}
                                    />
                            </LocalizationProvider>
                        </div>
                    </>
                : <> </>}

                { MapTypeVisit(typeVisit) == "Periodica" && MapTypeArrive(arrival) == "Multiple" ?
                    <div className="form-calendar-picker">
                        <p>Selecciona un rango de fecha de visitas</p>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateRangeCalendar
                                    calendars={1}
                                    value={dateRange}
                                    onChange={(newValue) => setDateRange(newValue)}
                                />
                        </LocalizationProvider>
                    </div>
                :<></>}

                { MapTypeVisit(typeVisit) == "No periodica" && MapTypeArrive(arrival) == "Multiple" ?
                    <div className="form-calendar-picker">
                        <FilledButton text={ open ? "Cerrar" : "Seleccionar fechas"} onClick={handleOpen} />
                        <MultipleDatesPicker
                            open={open}
                            selectedDates={[]}
                            onCancel={handleOpen}
                            onSubmit={dates => setMultipleDates(dates)}
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
