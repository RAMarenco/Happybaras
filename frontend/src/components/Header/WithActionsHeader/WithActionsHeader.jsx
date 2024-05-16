import classes from '../Header.module.scss';
import { Roles } from "../../../utils/RolesEnum";
import { useMediaQuery } from 'react-responsive';
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import Modal from "./Modal/Modal";
import Items from "./Items/Items";

const WithActionsHeader = ({role, imgSource}) => {
    const isMovile = useMediaQuery({ query: '(max-width: 900px)' });
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if(isClicked) {
            setIsClicked(false);
        }
        else {
            setIsClicked(true)
        }
    }

    const handleMenuChange = () => {
        if(isClicked) 
            return (
                <Modal role={role} imgSource={imgSource} handleClick={handleClick}/>
            )
        else
            return (
                <figure 
                    onClick={handleClick} 
                    className={classes["MenuButton"]}
                    style={role === Roles.ADMIN ? {backgroundColor: "#6BAA75"} : {backgroundColor: "#4281A4"}}
                    >
                    <MdOutlineMenu />
                </figure>
            )
        
    }

    return (
        <header style={role === Roles.ADMIN ? {backgroundColor: "#2F6C3C"} : {backgroundColor: "#CBDFEC"}}>
            <img src="/src/assets/Logo.svg" alt="Logo" />

            <div className={classes["RightContainer"]}>
                {
                    isMovile ? 
                        handleMenuChange()
                    :
                        <>
                            <Items role={role}/>
                            <figure className={classes["Avatar"]}>
                                <img src={imgSource} alt="Avatar" />
                            </figure>
                        </>
                }
                
            </div>
        </header>
    );
}

export default WithActionsHeader;