import classes from "./modal.module.scss";
import Items from "../items/items";
import { MdOutlineClear } from "react-icons/md";
import { ROLES } from "../../../../consts/consts";
import { useEffect, useState } from "react";

const Modal = ({ role, imgSource, handleClick }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleClose = () => {
        setIsMounted(false);
        setTimeout(() => {
            handleClick();
        }, 450);
    };

    return (
        <div
            className={[
                classes["ModalContainer"],
                isMounted ? classes["Active"] : null,
            ].join(" ")}
        >
            <div className={classes["UpperContainer"]}>
                <figure className={classes["Avatar"]}>
                    <img src={imgSource} alt="Avatar" />
                </figure>
                <figure
                    onClick={() => {
                        handleClose();
                    }}
                    className={classes["MenuButton"]}
                    style={
                        role === ROLES.ADMIN
                            ? { backgroundColor: "#6BAA75" }
                            : { backgroundColor: "#4281A4" }
                    }
                >
                    <MdOutlineClear />
                </figure>
            </div>
            <div className={classes["BottomContainer"]}>
                <Items role={role} />
            </div>
        </div>
    );
};

export default Modal;
