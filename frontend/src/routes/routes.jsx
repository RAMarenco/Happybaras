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
/*
    TODO import NotFound from "../pages/notFound/NotFound";
*/

const Routes = [
    {
        path: "/",
        element: <Home />,
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
