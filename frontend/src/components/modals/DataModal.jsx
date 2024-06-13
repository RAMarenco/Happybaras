import { FaHouse } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import * as INPUTS from "../../consts/admin/modalInputs.js";
import ROLES from "../../consts/roleConsts.js";
import useModalForm from '../../hooks/form/useModalForm.jsx';
import { buttonColorsStrings } from "../Buttons/ButtonColorStrings.js";
import FilledButton from "../Buttons/Filled/FilledButton.jsx";
import OutlinedButton from "../Buttons/Outlined/OutlinedButton.jsx";
import { DropdownMenu } from '../inputs/Dropdown/DropdownMenu.jsx';
import { GeneralInput } from '../inputs/GeneralInput/GeneralInput.jsx';
import classes from './DataModal.module.scss';

// Mode sets the context (user, house or create)

const DataModal = ({ userData, onDismiss, mode }) => {
    const initialData = (() => {
        if (mode === "user" && userData) {
            return userData;
        } else if (mode === "house" && userData) {
            return userData;
        } else if (mode === "create") {
            return {
                address: "",
                residence: "",
                habitants: "",
                phone: "",
                mainResidentEmail: ""
            };
        }
    })();

    const endpoint = (() => {
        if (mode === "user" && userData) {
            return `users/${userData.id}`;
        } else if (mode === "house" && userData) {
            return `houses/${userData.id}`;
        } else if (mode === "create") {
            return "houses";
        }
    })();

    const method = (() => {
        if (mode === "user" && userData) {
            return "PATCH";
        } else if (mode === "house" && userData) {
            return "PATCH";
        } else if (mode === "house" && !userData) {
            return "POST";
        }
    })();

    const { handleChange, handleOnSubmit, data } = useModalForm(
        initialData,
        endpoint,
        method,
        onDismiss
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

    if (mode == "user") {
        return (
            <div className={classes["modal-background"]}>
                <div className={classes["modal-container"]}>
                    <div className={classes["modal-header"]}>
                        <MdEdit className={classes["edit-icon"]} />
                        <h2 className={classes["modal-title"]}>Editar datos</h2>
                    </div>
                    <div className={classes["modal-content"]}>
                        <div className={classes["input-group"]}>
                            <GeneralInput
                                type="text"
                                name="name"
                                label="Nombre"
                                value={data.name}
                                disabled={true}
                            />
                            <GeneralInput
                                type="email"
                                name="email"
                                label="Correo electrónico"
                                value={data.email}
                                disabled={true}
                            />
                            <DropdownMenu
                                label={"Residencia"}
                                list={"address-list"}
                                name={"address"}
                                options={INPUTS.dummyAddresses}
                                onChange={(e) => { handleChange(e) }}
                                className={classes["dropdown"]}
                                filterOption={(option, searchTerm) => option.name.toLowerCase().includes(searchTerm.toLowerCase())}
                                renderOption={(option) => option.name}
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
                            <OutlinedButton text={"Cancelar"} onClick={onDismiss} color={buttonColorsStrings.accentRed} />
                            <FilledButton text={"Editar"} onClick={handleOnSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (mode == "house") {
        return (
            <div className={classes["modal-background"]}>
                <div className={classes["modal-container"]}>
                    <div className={classes["modal-header"]}>
                        <FaHouse className={classes["edit-icon"]} />
                        <h2 className={classes["modal-title"]}>Editar datos</h2>
                    </div>
                    <div className={classes["modal-content"]}>
                        <div className={classes["input-group"]}>
                            <DropdownMenu
                                label={"Residencia"}
                                list={"address-list"}
                                name={"address"}
                                options={INPUTS.dummyAddresses}
                                onChange={(e) => { handleChange(e) }}
                                className={classes["dropdown"]}
                                filterOption={(option, searchTerm) => option.name.toLowerCase().includes(searchTerm.toLowerCase())}
                                renderOption={(option) => option.name}
                                defaultValue={data.address}
                            />
                            <div className={classes["house_habitant_div"]}>
                                <GeneralInput
                                    type="text"
                                    name="residence"
                                    label="# residencia"
                                    value={data.residence}
                                    onChange={handleChange}
                                />
                                <GeneralInput
                                    type="email"
                                    name="habitants"
                                    label="Habitantes"
                                    value={data.habitants}
                                    onChange={(e) => { handleChange(e) }}
                                    disabled={true}
                                />
                            </div>
                            <GeneralInput
                                type="tel"
                                name="phone"
                                label="Número de teléfono"
                                value={data.phone}
                                onChange={(e) => { handleChange(e) }}
                            />
                            <DropdownMenu
                                label="Encargado"
                                list="mainResident-list"
                                name="mainResidentEmail"
                                options={INPUTS.dummyMainResidents}
                                onChange={(e) => { handleChange(e) }}
                                className={classes["dropdown"]}
                                filterOption={(option, searchTerm) => option.name.toLowerCase().includes(searchTerm.toLowerCase())}
                                renderOption={(option) => option.name}
                                defaultValue={data.mainResidentEmail}
                            />
                        </div>
                        <div className={classes["modal-actions"]}>
                            <OutlinedButton text={"Cancelar"} onClick={onDismiss} color={buttonColorsStrings.accentRed} />
                            <FilledButton text={"Editar"} onClick={handleOnSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (mode == "create") {
        return (
            <div className={classes["modal-background"]}>
                <div className={classes["modal-container"]}>
                    <div className={classes["modal-header"]}>
                        <FaHouse className={classes["edit-icon"]} />
                        <h2 className={classes["modal-title"]}>Crear datos</h2>
                    </div>
                    <div className={classes["modal-content"]}>
                        <div className={classes["input-group"]}>
                            <DropdownMenu
                                label={"Residencia"}
                                list={"address-list"}
                                name={"address"}
                                options={INPUTS.dummyAddresses}
                                onChange={(e) => { handleChange(e) }}
                                className={classes["dropdown"]}
                                filterOption={(option, searchTerm) => option.name.toLowerCase().includes(searchTerm.toLowerCase())}
                                renderOption={(option) => option.name}
                            />
                            <div className={classes["house_habitant_div"]}>
                                <GeneralInput
                                    type="text"
                                    name="residence"
                                    label="# residencia"
                                    onChange={(e) => handleChange(e)}
                                />
                                <GeneralInput
                                    type="email"
                                    name="habitants"
                                    label="Habitantes"
                                    onChange={(e) => { handleChange(e) }}
                                />
                            </div>
                            <GeneralInput
                                type="tel"
                                name="phone"
                                label="Número de teléfono"
                                onChange={(e) => { handleChange(e) }}
                            />
                            <DropdownMenu
                                label="Encargado"
                                list="mainResident-list"
                                name="mainResidentEmail"
                                options={INPUTS.dummyMainResidents}
                                onChange={(e) => { handleChange(e) }}
                                className={classes["dropdown"]}
                                filterOption={(option, searchTerm) => option.name.toLowerCase().includes(searchTerm.toLowerCase())}
                                renderOption={(option) => option.name}
                            />
                        </div>
                        <div className={classes["modal-actions"]}>
                            <OutlinedButton text={"Cancelar"} onClick={onDismiss} color={buttonColorsStrings.accentRed} />
                            <FilledButton text={"Editar"} onClick={handleOnSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DataModal