import App from "@/App";
import Home from "@/routes/Home";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/worksheet",
            },
            {
                path: "/settings",
            },
        ],
    },
];

export default routes;