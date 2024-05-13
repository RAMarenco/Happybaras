import GuardLayout from "../layouts/guard/guardLayout";
import Home from "../pages/home/home";
/*
    TODO import NotFound from "../pages/notFound/NotFound";
    TODO import { ProtectedRoute } from "../components/ProtectedRoute";
*/

const Routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/scan",
        element: <GuardLayout/>
    },
    /*{
        element: <ProtectedRoute />,
        children: [
            {
                path: "/dashboard",
                element: <>Dashboard</>,
            },
        ],
    },*/
    {
        path: "*",
        element: <h1>Not Found</h1>,
    },
];

export default Routes;
