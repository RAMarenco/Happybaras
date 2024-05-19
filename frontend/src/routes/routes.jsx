import AdminLayout from "../layouts/admin/adminLayout";
import GuardLayout from "../layouts/guard/guardLayout";
import Home from "../pages/home/home";
import VisitorPermits from "../pages/visitor/visitor"
import AdminLanding from "../pages/admin/landing/adminLanding";
import ProtectedRoutes from "../components/protectedRoutes/protectedRoutes";
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
                element: <VisitorPermits/>,
            }
            {
                path: "/admin",
                element: <AdminLayout />,
                children: [
                    {
                        path: "",
                        element: <AdminLanding />,
                    },
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
