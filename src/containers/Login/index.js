import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { uiConfig } from "../../settings";
import { firebaseAuth } from "../../utility";

class Login extends Component {
    state = { isSignedIn: false };

    render() {
        return (
            <div>
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebaseAuth}
                />
            </div>
        );
    }
}

export default Login;
