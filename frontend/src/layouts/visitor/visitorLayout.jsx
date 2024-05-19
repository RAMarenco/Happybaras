import { Navigate } from "react-router-dom";
import Header from "../../components/header/header";
import ROLES from "../../consts/roleConsts";
import { useAuth } from "../../hooks/auth/useAuth";
import Visitor from "../../pages/visitor/visitor";

const VisitorLayout = () => {
    const { verifyRole } = useAuth();
    if (!verifyRole(ROLES.VISITOR)) {
        return <Navigate to="/" />;
    }
    return (
        <>
            <Header />
            <Visitor />
        </>
    );
};

export default VisitorLayout;
