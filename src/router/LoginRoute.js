import React from "react";
import { Redirect, Route } from "react-router-dom";

/* Not to stay on login page once logged in */
const LoginRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            !isLoggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
);

export default LoginRoute;
