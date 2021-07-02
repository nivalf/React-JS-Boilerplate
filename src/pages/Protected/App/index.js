/*
    This is protected app
    - Only when user is signed in, they will be able to access this
*/

import React from "react";
import { connect } from "react-redux";
import { Layout } from "../../../components";
import AppRouter from "./AppRouter";
import Footer from "./Footer";
import Header from "./Header";

const { Content } = Layout;

const App = () => {
    return (
        <Layout>
            <Header />
            <Content>
                <AppRouter />;
            </Content>

            <Footer />
        </Layout>
    );
};

const mapStateToProps = (state) => ({
    user: state.signIn && state.signIn.user,
});

export default connect(mapStateToProps)(App);
