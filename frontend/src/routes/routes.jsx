import AdminLayout from "../layouts/admin/adminLayout";
import GuardLayout from "../layouts/guard/guardLayout";
import Home from "../pages/home/home";
import VisitorLayout from "../layouts/visitor/visitorLayout";
import AdminLanding from "../pages/admin/landing/adminLanding";
import ProtectedRoutes from "../components/protectedRoutes/protectedRoutes";
import { AdminUserManagement } from "../pages/admin/users/AdminUserManagement";
import AdminReports from "../pages/admin/reports/adminReports";
import ResidentLayout from "../layouts/resident/residentLayout";
import Members from "../pages/resident/members/members";
import AdminHouseManagement from "../pages/admin/houses/AdminHouseManagement";
import ResidentRequests from "../pages/resident/requests/ResidentRequests";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENTID } from "../consts/consts";
import ResidentLanding from "../pages/resident/landing/ResidentLanding.jsx";
/*
    TODO import NotFound from "../pages/notFound/NotFound";
*/

const Routes = [
    {
        path: "/",
        element: <GoogleOAuthProvider clientId={CLIENTID}><Home /></GoogleOAuthProvider>,
    },
    {
        element: <ProtectedRoutes />,
        children: [
            {
                path: "/scan",
                element: <GuardLayout />,
            },
            {
                path: "/permits",
                element: <VisitorLayout />,
            },
            {
                path: "/admin",
                element: <AdminLayout />,
                children: [
                    {
                        path: "",
                        element: <AdminLanding />,
                    },
                    {
                        path: "users",
                        element: <AdminUserManagement />,
                    },
                    {
                        path: "houses",
                        element: <AdminHouseManagement />,
                    },
                    {
                        path: "reports",
                        element: <AdminReports />,
                    },
                ],
            },
            {
                path: "/resident",
                element: <ResidentLayout />,
                children: [
                    {
                        path: "",
                        element: <ResidentLanding />,
                    },
                    {
                        path: "members",
                        element: <Members />,
                    },
                    {
                        path: "requests",
                        element: <ResidentRequests />
                    }
                ],
            },
        ],
    },
    {
        path: "*",
        element: <h1>Not Found</h1>,
    },
];

export default Routes;
