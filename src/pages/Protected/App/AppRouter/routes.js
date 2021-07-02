/* All routes which are accessible only when user is logged in */
import Home from "../../Home";

export const routes = [
    {
        path: ["/","/home"],
        component: Home,
    },
];
