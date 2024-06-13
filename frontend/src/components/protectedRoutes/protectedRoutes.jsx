import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./../../hooks/auth/useAuth";

const ProtectedRoutes = ({ redirectTo = "/" }) => {
    const { dataStorage } = useAuth();
    if (dataStorage() === null) {
        return <Navigate to={redirectTo} />;
    }

    return <Outlet />;
};

export default ProtectedRoutes;
