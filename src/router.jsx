import App from "@/App.jsx";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
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