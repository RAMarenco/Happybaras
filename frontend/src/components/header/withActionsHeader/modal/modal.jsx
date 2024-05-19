import classes from './modal.module.scss';
import Items from '../items/items';
import { MdOutlineClear } from "react-icons/md";
import { Roles } from '../../../../consts/RolesEnum';

const Modal = ({role, imgSource, handleClick}) => {
    
    return (
        <div className={classes["ModalContainer"]}>
            <div className={classes["UpperContainer"]}>
                <figure className={classes["Avatar"]}>
                    <img src={imgSource} alt="Avatar" />
                </figure>
                <figure 
                    onClick={() => {handleClick()}} 
                    className={classes["MenuButton"]} 
                    style={role === Roles.ADMIN ? {backgroundColor: "#6BAA75"} : {backgroundColor: "#4281A4"}}
                    > 
                    <MdOutlineClear />
                </figure>
            </div>
            <div className={classes["BottomContainer"]}>
                <Items role={role}/>
            </div>
        </div>
    )
}

export default Modal;