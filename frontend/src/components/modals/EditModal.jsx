import React, { useState } from 'react'
import classes from './EditModal.module.scss'
import { MdEdit } from "react-icons/md";
import { DropdownMenu } from '../inputs/DropdownMenu';
import * as INPUTS from "./modalInputs";
import ROLES from "../../consts/roleConsts"
import useModalForm from '../../hooks/form/useModalForm';
import { GeneralInput } from '../inputs/GeneralInput';

export const EditModal = ({ userData , onDismiss }) => {
    const { handleChange, handleOnSubmit, data } = useModalForm(
        userData,
        `users/${userData.id}`,
        "PATCH",
        () => {
            onDismiss();
        }
    );

    const roleLabels = {
        admin: "Administrador",
        visitor: "Visitante",
        mainResident: "Residente principal",
        normalResident: "Residente normal",
        guard: "Guardia"
    };

    const rolesArray = Object.entries(ROLES).map(([key, value]) => ({
        id: key,
        name: value,
        label: roleLabels[value] || value
    }));

    return (
        <div className={classes["modal-background"]}>
            <div className={classes["modal-container"]}>
                <div className={classes["modal-header"]}>
                    <MdEdit className={classes["edit-icon"]} />
                    <h2 className={classes["modal-title"]}>Editar datos</h2>
                </div>
                <div className={classes["input-group"]}>
                    <GeneralInput 
                        type="text"
                        name="name"
                        label="Nombre"
                        value={data.name}
                        onChange={(e) => handleChange(e)}
                        disabled={true}
                    />
                    <GeneralInput
                        type="email"
                        name="email"
                        label="Correo electrónico"
                        value={data.email}
                        onChange={(e) => { handleChange(e) }}
                        disabled={true}
                    />
                    <DropdownMenu
                        label={"Residencia"}
                        list={"address-list"}
                        name={"address"}
                        options={INPUTS.dummyAddresses}
                        onChange={(e) => { handleChange(e) }}
                        className={classes["dropdown"]}
                        defaultValue={data.address}
                    />
                    <DropdownMenu
                        label={"Rol"}
                        list={"role-list"}
                        name="role"
                        options={rolesArray}
                        onChange={(e) => { handleChange(e) }}
                        className={classes["dropdown"]}
                        filterOption={(option, searchTerm) => option.label.toLowerCase().includes(searchTerm.toLowerCase())}
                        renderOption={(option) => option.label}
                        defaultValue={rolesArray.find(role => role.name === data.role)?.label || ""}
                    />
                </div>
                <div className={classes["modal-actions"]}>
                    <button className={classes["cancel"]} onClick={onDismiss}>Cancelar</button>
                    <button className={classes["edit"]} onClick={handleOnSubmit}>Editar</button>
                </div>
            </div>
        </div>
    )
}