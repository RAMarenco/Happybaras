import AdminLayout from "../layouts/admin/adminLayout";
import GuardLayout from "../layouts/guard/guardLayout";
import Home from "../pages/home/home";
import VisitorLayout from "../layouts/visitor/visitorLayout";
import AdminLanding from "../pages/admin/landing/adminLanding";
import ProtectedRoutes from "../components/protectedRoutes/protectedRoutes";
import { AdminResidences } from "../pages/admin/residences/AdminResidences";
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
                        path: "residences",
                        element: <AdminResidences />,
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
