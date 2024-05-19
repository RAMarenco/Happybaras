import { Roles } from "../../../consts/RolesEnum";
import classes from '../header.module.scss';
import { Link } from "react-router-dom";

const NoActionsHeader = ({role, imgSource, handleClick}) => {
    
    return (
        <header style={role === Roles.VISITOR ? {backgroundColor: "#CBDFEC"} : {backgroundColor: "#E7B30B"}}>
            <Link to={"/"}>
                <img className={classes["Logo"]} src="/src/assets/Logo.svg" alt="Logo" />
            </Link>

            <div className={classes["RightContainer"]}>
                <figure className={classes["Avatar"]} onClick={() => {handleClick()}}>
                    <img src={imgSource} alt="Avatar" />
                </figure>
                
            </div>
        </header>
    );
}

export default NoActionsHeader;