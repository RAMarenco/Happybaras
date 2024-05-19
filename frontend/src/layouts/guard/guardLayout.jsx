import { useAuth } from "../../hooks/auth/useAuth";
import { Navigate } from "react-router-dom";
import { ROLES } from "../../consts/consts";
import GuardLanding from "../../pages/guard/guardLanding";
import Header from "../../components/header/header";

const GuardLayout = () => {
    const { verifyRole } = useAuth();
    if (!verifyRole(ROLES.GUARD)) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <Header />
            <GuardLanding />
        </>
    );
};

export default GuardLayout;
