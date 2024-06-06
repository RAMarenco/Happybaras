import React, { useState } from "react";
import OutlinedButton from "../../../components/Buttons/Outlined/OutlinedButton";
import SearchBar from "../../../components/searchBar/SearchBar";
import TableComponent from "../../../components/tableComponent/tableComponent";
import classes from "./ResidentRequests.module.scss";

const ResidentRequests = () => {
    const [search, setSearch] = useState("");
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (index) => {
        setSelectedButton(index);
    };

    const buttons = [
        { text: "Todas" },
        { text: "Residentes" },
        { text: "Visitas" },
    ];

    const data = [
        {
            id: 1,
            visitor: "john@mail.com",
            requester: "John Doe",
            entry: "Único",
            period: "-",
            days: "Lunes, Martes, Miércoles",
            dates: "2021-10-10",
            hours: "10:00 - 12:00",
            state: "Aprobado"
        },
        {
            id: 2,
            visitor: "john@mail.com",
            requester: "John Doe",
            entry: "Múltiple",
            period: "Periódico",
            days: "Lunes, Martes, Miércoles",
            dates: "2021-10-10",
            hours: "10:00 - 12:00",
            state: "Desaprobado"
        },
        {
            id: 3,
            visitor: "john@mail.com",
            requester: "John Doe",
            entry: "Único",
            period: "-",
            days: "Lunes, Martes, Miércoles",
            dates: "2021-10-10",
            hours: "10:00 - 12:00",
            state: "En espera"
        },
        {
            id: 4,
            visitor: "john@mail.com",
            requester: "John Doe",
            entry: "Único",
            period: "-",
            days: "Lunes, Martes, Miércoles",
            dates: "2021-10-10",
            hours: "10:00 - 12:00",
            state: "En espera"
        }
    ];

    const headers = {
        "Correo visitante": "visitor",
        "Solicitante": "requester",
        "Tipo de entrada": "entry",
        "Periodo": "period",
        "Días": "days",
        "Fecha(s)": "dates",
        "Horas": "hours",
        "Estado": "state"
    };

    const handleSearchChange = (value) => {
        setSearch(value);
    };

    return (
        <div className={classes["ResidentRequest_Container"]}>
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
            <TableComponent
                data={data}
                headers={headers}
                role="mainResident"
                permission={true}
            />
        </div>
    )
}

export default ResidentRequests;