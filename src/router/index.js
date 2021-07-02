import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import LoginRoute from "./LoginRoute";
import ProtectedRoute from "./ProtectedRoute";
import { loginRoutes, normalRoutes, protectedRoutes } from "./routes";

const PublicRoutes = ({ history, isLoggedIn }) => {
    /* Normal Routes */
    const NormalRoutesJSX = normalRoutes.map((routeProps) => (
        <Route exact {...routeProps} />
    ));

    /* Restricted Routes */
    const ProtectedRoutesJSX = protectedRoutes.map((routeProps) => (
        <ProtectedRoute exact {...routeProps} isLoggedIn={isLoggedIn} />
    ));

    /* Login Routes */
    const LoginRoutesJSX = loginRoutes.map((routeProps) => (
        <LoginRoute exact {...routeProps} isLoggedIn={isLoggedIn} />
    ));
    return (
        <ConnectedRouter history={history}>
            {[...NormalRoutesJSX, ...ProtectedRoutesJSX, ...LoginRoutesJSX]}
        </ConnectedRouter>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: (state?.signIn || {}).hasOwnProperty("user") // true if signed in
        ? !!state?.signIn?.user // false if signed out
        : undefined, // undefined during fetching time
});

export default connect(mapStateToProps)(PublicRoutes);
