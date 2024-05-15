import { Link } from "react-router-dom";
import { Roles } from "../../../utils/RolesEnum";
import classes from '../Header.module.scss';
import { useMediaQuery } from 'react-responsive';

const WithActionsHeader = ({children, role, imgSource}) => {
    const isMovile = useMediaQuery({ query: '(max-width: 900px)' });
    const adminActions = [
        {
            name: "Usuarios", 
            link: "/",
        },
        {
            name: "Residentes", 
            link: "/",
        },
        {
            name: "Reportes", 
            link: "/",
        },
    ];
    const residentActions = [
        {
            name: "Visitas", 
            link: "/",
        },
        {
            name: "Historial", 
            link: "/",
        },
        {
            name: "Miembros", 
            link: "/",
        },
    ];

    return (
        <header style={role === Roles.ADMIN ? {backgroundColor: "#2F6C3C"} : {backgroundColor: "#CBDFEC"}}>
            <img src="/src/assets/Logo.svg" alt="Logo" />

            <div className={classes["RightContainer"]}>
                {
                    role === Roles.ADMIN ? 
                        adminActions.map((name, link) => {
                            <Link to={link} className={classes["HeaderButton"]}>
                                {name}
                            </Link>  
                        })
                    :
                        residentActions.map((name, link) => {
                            <Link to={link} className={classes["HeaderButton"]}>
                                {name}
                            </Link>
                        })
                }
                {
                    isMovile ? 
                        <></>
                    :
                        <figure className={classes["Avatar"]}>
                            <img src={imgSource} alt="Avatar" />
                        </figure>
                }
                
            </div>
        </header>
    );
}

export default WithActionsHeader;