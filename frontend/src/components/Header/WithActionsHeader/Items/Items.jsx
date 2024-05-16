import { Roles } from "../../../../utils/RolesEnum";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

const Items = ({role}) => {
    const isMovile = useMediaQuery({ query: '(max-width: 900px)' });

    const adminActions = [
        {
            name: "Usuarios", 
            link: "/",
        },
        {
            name: "Residencias", 
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

    return(
        <>
            {   
                role === Roles.ADMIN ? 
                    adminActions.map((action) => {
                        return (
                            <Link 
                            key={action.link} 
                            to={action.link} 
                            style={isMovile ? 
                                {color: "#001021", textDecoration: "none"}  : 
                                {color: "#F4F8FB", textDecoration: "none"}}
                            >
                                {action.name}
                            </Link>
                        )  
                    })
                :
                    residentActions.map((action) => {
                        return (
                            <Link 
                                key={action.link} 
                                to={action.link} 
                                style={isMovile ? 
                                    {color: "#001021", textDecoration: "none"}  : 
                                    {color: "#254155", textDecoration: "none"}}
                                >
                                {action.name}
                            </Link>
                        )
                    })
            }
        </>
    )
}

export default Items;