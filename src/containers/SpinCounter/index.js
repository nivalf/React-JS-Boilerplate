import React, { Component } from "react";
import { connect } from "react-redux";
import DemoActions from "../../redux/demo/actions";

import logo from "../../images/logo.svg";
import "./App.css";
import { history } from "../../redux/store";

const { incrementCounter } = DemoActions;

class SpinCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(this.props.count === 3) {
            history.push("/login")
        }
    };

    onLogoClick = () => {
        this.props.incrementCounter();
    };

    render = () => {
        return (
            <div className="App">
                <header className="App-header">
                    <img
                        onClick={this.onLogoClick}
                        src={logo}
                        className="App-logo"
                        alt="logo"
                    />
                    <p>Logo clicked {this.props.count} times.</p>
                </header>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        count: state.demoReducer && state.demoReducer.counter,
    };
}
export default connect(mapStateToProps, {
    incrementCounter,
})(SpinCounter);
