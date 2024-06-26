import classes from "../header.module.scss";
import { ROLES } from "../../../consts/consts";
import { useMediaQuery } from "react-responsive";
import { MdOutlineMenu } from "react-icons/md";
import Bubble from "../../bubble/bubble";
import Modal from "./modal/modal";
import Items from "./items/items";
import { Link } from "react-router-dom";
import Logo from "./../../../assets/Logo.svg";

const WithActionsHeader = ({ role, imgSource, isClicked, handleClick }) => {
    const isMovile = useMediaQuery({ query: "(max-width: 900px)" });

    const handleMenuChange = () => {
        if (isClicked)
            return (
                <Modal
                    role={role}
                    imgSource={imgSource}
                    handleClick={handleClick}
                />
            );
        else
            return (
                <>
                    <Bubble
                        icon={<MdOutlineMenu />}
                        handleClick={() => {handleClick()}}
                        color={
                            role === ROLES.ADMIN
                                ? "#6BAA75"
                                : "#4281A4" 
                        }
                    />
                </>
            );
    };

    return (
        <header
            style={
                role === ROLES.ADMIN
                    ? { backgroundColor: "#41884E" }
                    : { backgroundColor: "#CBDFEC" }
            }
        >
            <Link to={"./"}>
                <img className={classes["Logo"]} src={Logo} alt="Logo" />
            </Link>

            <div className={classes["RightContainer"]}>
                {isMovile ? (
                    handleMenuChange()
                ) : (
                    <>
                        <Items role={role} />
                        <figure className={classes["Avatar"]}>
                            <img src={imgSource} alt="Avatar" />
                        </figure>
                    </>
                )}
            </div>
        </header>
    );
};

export default WithActionsHeader;
