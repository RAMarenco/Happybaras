import { MdDelete } from "react-icons/md";
import useModalForm from "../../hooks/form/useModalForm.jsx";
import { buttonColorsStrings } from "../Buttons/ButtonColorStrings.js";
import FilledButton from "../Buttons/Filled/FilledButton.jsx";
import OutlinedButton from "../Buttons/Outlined/OutlinedButton.jsx";
import classes from './DeleteModal.module.scss';

const DeleteModal = ({ userData, onDismiss, mode }) => {
    console.log(userData);
    const { handleOnSubmit, data } = useModalForm(
        userData,
        `users/${userData.id}`,
        "PATCH",
        () => {
            onDismiss();
        }
    );

    const isUserMode = mode === "user";
    const title = isUserMode ? "Eliminar usuario" : "Eliminar residencia";
    const message = isUserMode ? (
        <>¿Está seguro de eliminar el usuario <strong className={classes["strong"]}>{data.name}</strong>?</>
    ) : (
        <>¿Está seguro de eliminar la residencia #<strong className={classes["strong"]}>{data.residence}</strong>?</>
    );

    return (
        <div className={classes["modal-background"]}>
            <div className={classes["modal-container"]}>
                <div className={classes["modal-header"]}>
                    <MdDelete className={classes["delete-icon"]} />
                    <h2 className={classes["modal-title"]}>{title}</h2>
                </div>
                <div className={classes["modal-content"]}>
                    <p>{message}</p>
                </div>
                <div className={classes["modal-actions"]}>
                    <OutlinedButton text="Cancelar" onClick={onDismiss} color={buttonColorsStrings.accentRed} />
                    <FilledButton text="Confirmar" onClick={handleOnSubmit} color={buttonColorsStrings.accentRed} />
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;