import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";

const AppRoutes = (props) => {
    /* Public Routes */

    return (
        <Switch>
            {routes.map((routeProps, index) => (
                <Route exact {...routeProps} key={`appRoute_${index}`} />
            ))}
        </Switch>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: (state?.signIn || {}).hasOwnProperty("user") // true : signed in
        ? !!state?.signIn?.user // false : signed out
        : undefined, // undefined : fetching
});

export default connect(mapStateToProps)(AppRoutes);
