import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";

const Router = [
    {
        path: "/",
        element:<MainLayout/>,
        children:[
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/page1",
                element: <Page1 />,
            },
            {
                path: "/page2",
                element: <Page2 />,
            },
        ]
    },

];

export default Router;