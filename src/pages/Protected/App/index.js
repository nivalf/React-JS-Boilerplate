/*
    This is protected app
    - Only when user is signed in, they will be able to access this
*/

import React from "react";
import { connect } from "react-redux";
import AppRouter from "./AppRouter";

const App = (props) => {

    return <AppRouter  />;
};

const mapStateToProps = (state) => ({
    user: state.signIn && state.signIn.user,
});

export default connect(mapStateToProps)(App);
