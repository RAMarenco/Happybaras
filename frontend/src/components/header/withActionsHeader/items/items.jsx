import { ROLES } from "../../../../consts/consts";
import { ACTIONS } from "../../../../consts/consts";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

const Items = ({role}) => {
    const isMovile = useMediaQuery({ query: '(max-width: 900px)' });
    const getActions = () => {
        if(role === ROLES.ADMIN){
            return ACTIONS.ADMINACTIONS;
        }

        if(role === ROLES.MAINRESIDENT){
            return ACTIONS.ENCARGADOACTIONS;
        }

        if(role === ROLES.NORMALRESIDENT){
            return ACTIONS.RESIDENTACTIONS;
        }
    }

    const setColors = () => {
        switch(role) {
            case ROLES.ADMIN:
                if (isMovile) {
                    return {color: "#001021", textDecoration: "none"};
                } else {
                    return {color: "#F4F8FB", textDecoration: "none"};
                }
            case ROLES.MAINRESIDENT: {
                if (isMovile) {
                    return {color: "#001021", textDecoration: "none"};
                } else {
                    return {color: "#254155", textDecoration: "none"};
                }
            }
            case ROLES.NORMALRESIDENT: {
                if (isMovile) {
                    return {color: "#001021", textDecoration: "none"};
                } else {
                    return {color: "#254155", textDecoration: "none"};
                }
            }
        }
    }
 
    const actions = getActions();
    
    return(
        <>
            {   
                actions.map((action) => {
                    return (
                        <Link 
                            key={action.name} 
                            to={action.link} 
                            style={setColors()}
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