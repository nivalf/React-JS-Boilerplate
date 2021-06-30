import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux";
import SpinCounter from "../containers/SpinCounter";
import App from "../containers/App";
import Login from "../containers/Login";

/* Restricted Route (Forward to login Page) 
    - Uses the prop value: "isLoggedIn" to check
*/
const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isLoggedIn ? (
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
                        pathname: "/home",
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
);

const PublicRoutes = ({ history, isLoggedIn }) => {
    return (
        <ConnectedRouter history={history}>
            <div>
                {/* Normal Routes */}
                <Route exact path={"/"} component={SpinCounter} />

                {/* Login Route */}
                <LoginRoute
                    path="/login"
                    component={Login}
                    isLoggedIn={isLoggedIn}
                />

                {/* Restricted Routes */}
                <RestrictedRoute
                    exact
                    path="/home"
                    component={App}
                    isLoggedIn={isLoggedIn}
                />
            </div>
        </ConnectedRouter>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: !!(state.signIn && state.signIn.user),
});

export default connect(mapStateToProps)(PublicRoutes);
