import { Outlet, useOutlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ROLES } from "../../consts/consts";
import { useAuth } from "../../hooks/auth/useAuth";
import classes from "./AdminLayout.module.scss";

const AdminLayout = () => {
    const { verifyRole, getRole } = useAuth();
    if (!verifyRole(ROLES.ADMIN)) {
        return <Navigate to="/" />;
    }

    const outlet = useOutlet();
    return (
        <>
            <nav className={classes["admin-nav"]}></nav>
            {outlet && <Outlet />}
        </>
    );
};

export default AdminLayout;
