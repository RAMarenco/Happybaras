import { Outlet, useOutlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ROLES } from "../../consts/consts";
import { useAuth } from "../../hooks/auth/useAuth";
import Header from "../../components/header/header";

const AdminLayout = () => {
    const { verifyRole, getRole } = useAuth();
    if (!verifyRole(ROLES.ADMIN)) {
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

export default AdminLayout;
