import { Navigate } from "react-router-dom";
import Header from "../../components/header/header";
import ROLES from "../../consts/roleConsts";
import { useAuth } from "../../hooks/auth/useAuth";
import VisitorLanding from "../../pages/visitor/visitorLanding";

const VisitorLayout = () => {
    const { verifyRole } = useAuth();
    if (!verifyRole(ROLES.VISITOR)) {
        return <Navigate to="/" />;
    }
    return (
        <>
            <Header />
            <VisitorLanding />
        </>
    );
};

export default VisitorLayout;
