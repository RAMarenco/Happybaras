import { useState } from "react";
import classes from "./ResidentHistorial.module.scss"
import OutlinedButton from "../../../components/Buttons/Outlined/OutlinedButton";
import SearchBar from "../../../components/searchBar/SearchBar";
import TableComponent from "../../../components/tableComponent/tableComponent";
import ROLES from "../../../consts/roleConsts";

const ResidentHistorial = () => {
    const [search, setSearch] = useState("");
    const [selectedButton, setSelectedButton] = useState(null);
    const getLocalRole = localStorage.getItem("dataStorage");
    const role = JSON.parse(getLocalRole);

    const handleButtonClick = (index) => {
        setSelectedButton(index);
    };

    const buttons = [
        { text: "Todas" },
        { text: "Residentes" },
        { text: "Visitas" },
    ];

    const dataMain = [
        {
            id: 1,
            email: "john@mail.com",
            role: "visitor",
            dates: "10 de febrero del 2024",
            hours: "10:00 - 12:00"
        },
        {
            id: 2,
            email: "john@mail.com",
            role: "visitor",
            dates: "10 de febrero del 2024",
            hours: "10:00 - 12:00"
        },
        {
            id: 3,
            email: "john@mail.com",
            role: "visitor",
            dates: "10 de febrero del 2024",
            hours: "10:00 - 12:00"
        },
        {
            id: 4,
            email: "john@mail.com",
            role: "visitor",
            dates: "10 de febrero del 2024",
            hours: "10:00 - 12:00"
        },
        {
            id: 5,
            email: "john@mail.com",
            role: "visitor",
            dates: "10 de febrero del 2024",
            hours: "10:00 - 12:00"
        },
    ];

    const dataNormal = [
        {
            id: 1,
            email: "john@mail.com",
            typeArrive: "Unico",
            typePeriod: "Periodico",
            days: "Lunes, martes y jueves",
            dates: "10 de febrero hasta 30 de febrero",
            hours: "7:00 - 13:00",
            state: "Aprobado"
        },
        {
            id: 2,
            email: "john@mail.com",
            typeArrive: "Multiple",
            typePeriod: "No periodico",
            days: "",
            dates: "10 de febrero y 15 de febrero",
            hours: "7:00 - 13:00",
            state: "Desaprobado"
        },
        {
            id: 3,
            email: "john@mail.com",
            typeArrive: "Multiple",
            typePeriod: "No periodico",
            days: "",
            dates: "10 de febrero y 15 de febrero",
            hours: "7:00 - 13:00",
            state: "Desaprobado"
        },
        {
            id: 4,
            email: "john@mail.com",
            typeArrive: "Multiple",
            typePeriod: "No periodico",
            days: "",
            dates: "10 de febrero y 15 de febrero",
            hours: "7:00 - 13:00",
            state: "Desaprobado"
        },
        {
            id: 5,
            email: "john@mail.com",
            typeArrive: "Multiple",
            typePeriod: "No periodico",
            days: "",
            dates: "10 de febrero y 15 de febrero",
            hours: "7:00 - 13:00",
            state: "Desaprobado"
        },
    ];

    const headersMain = {
        "Correo": "email",
        "Rol": "role",
        "Fecha/s": "dates",
        "Horas": "hours"
    };

    const headersNormal = {
        "Correo": "email",
        "Tipo de entrada": "typeArrive",
        "Periodo": "typePeriod",
        "Dias": "days",
        "Fecha/s": "dates",
        "Horas": "hours",
        "Estado": "state"
    };

    const handleSearchChange = (value) => {
        setSearch(value);
    };

    return (
        <div className={classes["ResidentHistorial_Container"]}>
            <div className={classes["search-bar-div"]}>
                <SearchBar
                    value={search}
                    onSearchChange={handleSearchChange}
                    placeHolder={"Buscar por correo electrónico..."}
                    classname={classes["search-bar"]}
                />
                <div className={classes["buttons-container"]}>
                    {buttons.map((button, index) => {
                        return (
                            <OutlinedButton
                                key={index}
                                text={button.text}
                                color={button.color}
                                isSelected={selectedButton === index}
                                onClick={() => handleButtonClick(index)}
                            />
                        )
                    })
                    }
                </div>
            </div>
            {
                role.user.role == ROLES.MAINRESIDENT ?
                <TableComponent
                    data={dataMain}
                    headers={headersMain}
                    role="mainResident"
                /> :
                <TableComponent
                    data={dataNormal}
                    headers={headersNormal}
                    role="mainResident"
                />
            }
        </div>
    )
}

export default ResidentHistorial;