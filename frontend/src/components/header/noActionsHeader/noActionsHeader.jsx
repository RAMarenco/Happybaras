import { ROLES } from "../../../consts/consts";
import classes from '../header.module.scss';
import Logo from "./../../../assets/Logo.svg";

const NoActionsHeader = ({role, imgSource, handleClick}) => {
    
    return (
        <header style={role === ROLES.VISITOR ? {backgroundColor: "#CBDFEC"} : {backgroundColor: "#E7B30B"}}>
            <img className={[classes["Logo"], classes["No_action"]].join(" ")} src={Logo} alt="Logo" />

            <div className={classes["RightContainer"]}>
                <figure className={classes["Avatar"]} onClick={() => {handleClick()}}>
                    <img src={imgSource} alt="Avatar" />
                </figure>
                
            </div>
        </header>
    );
}

export default NoActionsHeader;