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
    isLoggedIn: (state?.signIn || {}).hasOwnProperty("user") // true if signed in
        ? !!state?.signIn?.user // false if signed out
        : undefined, // undefined during fetching time
});

export default connect(mapStateToProps)(AppRoutes);
