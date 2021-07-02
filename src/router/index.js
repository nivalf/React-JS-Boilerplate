import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginRoute from "./LoginRoute";
import ProtectedRoute from "./ProtectedRoute";
import { loginRoutes, publicRoutes, protectedRoutes } from "./routes";

const PublicRoutes = ({ history, isLoggedIn }) => {
    /* Public Routes */
    const PublicRoutesJSX = publicRoutes.map((routeProps, index) => (
        <Route exact {...routeProps} key={`public_${index}`} />
    ));

    /* Login Routes */
    const LoginRoutesJSX = loginRoutes.map((routeProps, index) => (
        <LoginRoute
            exact
            {...routeProps}
            isLoggedIn={isLoggedIn}
            key={`login_${index}`}
        />
    ));

    /* Protected Routes 
        - Ideally just add the protected app here. So that it will be accessible only after sign in
        - Inside the App, add another level of routing. 
    */
    const ProtectedRoutesJSX = protectedRoutes.map((routeProps, index) => (
        <ProtectedRoute
            // exact
            {...routeProps}
            isLoggedIn={isLoggedIn}
            key={`protected_${index}`}
        />
    ));
    return (
        <ConnectedRouter history={history}>
            <Switch>
                {[...PublicRoutesJSX, ...LoginRoutesJSX, ...ProtectedRoutesJSX]}
            </Switch>
        </ConnectedRouter>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: (state?.signIn || {}).hasOwnProperty("user") // true : signed in
        ? !!state?.signIn?.user // false : signed out
        : undefined, // undefined : fetching
});

export default connect(mapStateToProps)(PublicRoutes);
