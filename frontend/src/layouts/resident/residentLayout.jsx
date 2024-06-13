import { Navigate, Outlet, useOutlet } from "react-router-dom";
import Header from "../../components/header/header";
import ROLES from "../../consts/roleConsts";
import { useAuth } from "../../hooks/auth/useAuth";

const ResidentLayout = () => {
    const { verifyRole } = useAuth();
    if (!verifyRole(ROLES.MAINRESIDENT) && !verifyRole(ROLES.NORMALRESIDENT)) {
        return <Navigate to="/" />;
    }

    const outlet = useOutlet();
    return (
        <>
            <Header />
            {outlet && <Outlet />}
        </>
    );
};

export default ResidentLayout;