/* All routes which are accessible only when user is logged in */
import App from "../../../containers/App";

export const protectedRoutes = [{ path: ["/", "/home"], component: App }];
