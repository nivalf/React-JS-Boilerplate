import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { uiConfig } from "../../settings";
import { firebaseAuth } from "../../utility";

const Login = () => (
    <div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
    </div>
);

export default Login;
