import React from 'react'
import InputGroup from '../inputs/inputGroup'
import classes from './EditModal.module.scss'
import { MdEdit } from "react-icons/md";
import { DropdownMenu } from '../inputs/DropdownMenu';
import * as INPUTS from "./modalInputs";
import ROLES from "../../consts/roleConsts"
import useModalForm from '../../hooks/form/useModalForm';

export const EditModal = ({ onDismiss }) => {
    const user = {
        id: 1,
        name: "John Doe",
        email: "john@doe.com",
        address: "1234 Main St",
        role: "mainResident"
    };

    const { handleChange, handleOnSubmit } = useModalForm(
        user
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
                    <InputGroup
                        inputs={INPUTS.editModalInputs}
                        onChange={(e) => { handleChange(e) }}
                    />
                    <DropdownMenu
                        label={"Residencia"}
                        list={"address-list"}
                        name={"addresses"}
                        options={INPUTS.dummyAddresses}
                        handleChange={(e) => { handleChange(e) }}
                        maxResults={3}
                        className={classes["dropdown"]}
                    />
                    <DropdownMenu
                        label={"Rol"}
                        list={"role-list"}
                        name="role"
                        options={rolesArray}
                        handleChange={(e) => { handleChange(e) }}
                        className={classes["dropdown"]}
                        filterOption={(option, searchTerm) => option.label.toLowerCase().includes(searchTerm.toLowerCase())}
                        renderOption={(option) => option.label}
                    />
                </div>
                <div className={classes["modal-actions"]}>
                    <button className={classes["cancel"]} onClick={onDismiss}>Cancelar</button>
                    <button className={classes["save"]} onClick={handleOnSubmit}>Editar</button>
                </div>
            </div>
        </div>
    )
}
