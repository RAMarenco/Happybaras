import classes from '../header.module.scss';
import { Roles } from "../../../consts/RolesEnum";
import { useMediaQuery } from 'react-responsive';
import { MdOutlineMenu } from "react-icons/md";
import Modal from "./modal/modal";
import Items from "./items/items";
import { Link } from 'react-router-dom';
import Logo from './../../../assets/Logo.svg';

const WithActionsHeader = ({role, imgSource, isClicked, handleClick}) => {
    const isMovile = useMediaQuery({ query: '(max-width: 900px)' });

    const handleMenuChange = () => {
        if(isClicked) 
            return (
                <Modal role={role} imgSource={imgSource} handleClick={handleClick}/>
            )
        else
            return (
                <figure 
                    onClick={() => {handleClick()}} 
                    className={classes["MenuButton"]}
                    style={role === Roles.ADMIN ? {backgroundColor: "#6BAA75"} : {backgroundColor: "#4281A4"}}
                    >
                    <MdOutlineMenu />
                </figure>
            )
        
    }

    return (
        <header style={role === Roles.ADMIN ? {backgroundColor: "#41884E"} : {backgroundColor: "#CBDFEC"}}>
            <Link to={"/"}>
                <img className={classes["Logo"]} src={Logo} alt="Logo" />
            </Link>

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