import App from "@/App";
import Home from "@/routes/Home";
import Worksheet from "@/routes/Worksheet";
import Settings from "./routes/Settings";

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
                element: <Worksheet />
            },
            {
                path: "/settings",
                element: <Settings />
            },
        ],
    },
];

export default routes;