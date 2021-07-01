import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut_firebase } from "../../utility";
import { Button, Card, Typography, Image } from "../../components";

const { Title } = Typography;

class App extends Component {
    render() {
        let { user } = this.props;

        return (
            <Card
                extra={
                    <Button onClick={() => signOut_firebase()}>
                        Sign out!
                    </Button>
                }
                title={
                    <Title level={1}>Welcome {user && user.displayName}</Title>
                }
            >
                <Image
                    alt="profile pic"
                    src={user && user.photoURL}
                    preview={false}
                />
            </Card>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.signIn && state.signIn.user,
});

export default connect(mapStateToProps)(App);
