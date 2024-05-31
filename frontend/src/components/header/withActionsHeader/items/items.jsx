import { ROLES } from "../../../../consts/consts";
import { ACTIONS } from "../../../../consts/consts";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import classes from "./Items.module.scss";

const Items = ({ role }) => {
    const isMovile = useMediaQuery({ query: "(max-width: 900px)" });
    const getActions = () => {
        if (role === ROLES.ADMIN) {
            return ACTIONS.ADMINACTIONS;
        }

        if (role === ROLES.MAINRESIDENT) {
            return ACTIONS.ENCARGADOACTIONS;
        }

        if (role === ROLES.NORMALRESIDENT) {
            return ACTIONS.RESIDENTACTIONS;
        }
    };

    const setColors = () => {
        switch (role) {
            case ROLES.ADMIN:
                if (isMovile) {
                    return { color: "#001021", textDecoration: "none" };
                } else {
                    return { color: "#F4F8FB", textDecoration: "none" };
                }
            case ROLES.MAINRESIDENT: {
                if (isMovile) {
                    return { color: "#001021", textDecoration: "none" };
                } else {
                    return { color: "#254155", textDecoration: "none" };
                }
            }
            case ROLES.NORMALRESIDENT: {
                if (isMovile) {
                    return { color: "#001021", textDecoration: "none" };
                } else {
                    return { color: "#254155", textDecoration: "none" };
                }
            }
        }
    };

    const extractPathFromSecondSlash = (path) => {
        const parts = path.split("/");
        return parts.length > 2 ? parts.slice(2).join("/") : "";
    };

    const actions = getActions();
    const route = useLocation();
    const extractedRoute = extractPathFromSecondSlash(route.pathname);

    return (
        <>
            {actions.map((action) => {
                return (
                    <Link
                        key={action.name}
                        to={action.link}
                        style={setColors()}
                        className={[
                            classes["Item"],
                            `./${extractedRoute}` === action.link
                                ? classes["Active"]
                                : null,
                        ].join(" ")}
                    >
                        {action.name}
                        <span className={classes["Line"]}></span>
                    </Link>
                );
            })}
        </>
    );
};

export default Items;
