import { useAuth } from "../../hooks/auth/useAuth";
import { Navigate } from "react-router-dom";
import { ROLES } from "../../consts/consts";
import GuardLanding from "../../pages/guard/guardLanding";
import classes from "./GuardLayout.module.scss";

const GuardLayout = () => {
    const { verifyRole } = useAuth();
    if (!verifyRole(ROLES.GUARD)) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <nav className={classes["guard-nav"]}></nav>
            <GuardLanding />
        </>
    );
};

export default GuardLayout;
