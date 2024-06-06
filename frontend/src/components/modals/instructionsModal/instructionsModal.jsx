import Instructions from "../../instructions/instructions"
import classes from "./instructionsModal.module.scss";

const InstructionsModal = () => { 
    return (
        <div className={classes["ModalBackground"]}>
            <div className={classes["ModalContainer"]}>
                <Instructions isModal={true}/>
            </div>
        </div>
    );
}

export default InstructionsModal;