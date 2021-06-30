import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut_firebase } from "../../utility";

class App extends Component {
    render() {
        let { user } = this.props;

        return (
            <div>
                <span>
                    <div>Signed In!</div>
                    <button onClick={() => signOut_firebase()}>Sign out!</button>
                    <h1>Welcome {user && user.displayName}</h1>
                    <img alt="profile pic" src={user && user.photoURL} />
                </span>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.signIn && state.signIn.user,
});

export default connect(mapStateToProps)(App);
