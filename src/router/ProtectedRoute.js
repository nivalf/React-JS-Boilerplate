import React from "react";
import { Redirect, Route } from "react-router-dom";

/* Protected Route (Forward to login Page) 
    - Uses the prop value: "isLoggedIn" to check
*/
const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isLoggedIn !== false ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
);

export default ProtectedRoute;
