import { MdDelete } from "react-icons/md";
import useModalForm from "../../hooks/form/useModalForm.jsx";
import { buttonColorsStrings } from "../Buttons/ButtonColorStrings.js";
import FilledButton from "../Buttons/Filled/FilledButton.jsx";
import OutlinedButton from "../Buttons/Outlined/OutlinedButton.jsx";
import classes from './DeleteModal.module.scss';

export const DeleteModal = ({ userData, onDismiss }) => {
    const { handleOnSubmit, data } = useModalForm(
        userData,
        `users/${userData.id}`,
        "PUT",
        () => {
            onDismiss();
        }
    );

    return (
        <div className={classes["modal-background"]}>
            <div className={classes["modal-container"]}>
                <div className={classes["modal-header"]}>
                    <MdDelete className={classes["delete-icon"]} />
                    <h2 className={classes["modal-title"]}>Eliminar usuario</h2>
                </div>
                <div className={classes["modal-content"]}>
                    <p>¿Está seguro de eliminar el usuario <b className={classes["strong"]}>{data.name}</b>?</p>
                </div>
                <div className={classes["modal-actions"]}>
                    <OutlinedButton text="Cancelar" onClick={onDismiss} color={buttonColorsStrings.accentRed} />
                    <FilledButton text="Confirmar" onClick={handleOnSubmit} color={buttonColorsStrings.accentRed} />
                </div>
            </div>
        </div>
    )
}