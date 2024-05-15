import { Roles } from "../../../utils/RolesEnum";
import classes from '../Header.module.scss';

const NoActionsHeader = ({role, imgSource, handleClick}) => {

    return (
        <header style={role === Roles.VISITOR ? {backgroundColor: "#CBDFEC"} : {backgroundColor: "#E7B30B"}}>
            <img src="/src/assets/Logo.svg" alt="Logo" />

            <div className={classes["RightContainer"]}>
                <figure className={classes["Avatar"]} onClick={() => {handleClick()}}>
                    <img src={imgSource} alt="Avatar" />
                </figure>
                
            </div>
        </header>
    );
}

export default NoActionsHeader;