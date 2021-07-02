/*
    This is protected app
    - Only when user is signed in, they will be able to access this
*/

import React from "react";
import { connect } from "react-redux";
import { Button, Card, Image, Typography } from "../../../components";
import { signOut_firebase } from "../../../utility";

const { Title } = Typography;

const Home = (props) => {
    let { user } = props;

    return (
        <Card
            extra={
                <Button onClick={() => signOut_firebase()}>Sign out!</Button>
            }
            title={<Title level={1}>Welcome {user && user.displayName}</Title>}
        >
            <Image
                alt="profile pic"
                src={user && user.photoURL}
                preview={false}
            />
        </Card>
    );
};

const mapStateToProps = (state) => ({
    user: state.signIn && state.signIn.user,
});

export default connect(mapStateToProps)(Home);
