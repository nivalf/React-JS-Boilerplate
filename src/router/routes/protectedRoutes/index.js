/* All routes which are accessible only when user is logged in */
import App from "../../../pages/Protected/App";

export const protectedRoutes = [
    {
        path: "/",
        component: App,
    },
];
