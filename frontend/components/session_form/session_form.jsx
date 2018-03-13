import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn) {
            this.props.history.push('/');
        }
    }

    button() {
        return (this.props.formType === "/login") ? "Log In" : "Create Account"
    }

    errors() {
        return this.props.errors.map(err => <li key={err}>{err}</li>)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }

    header() {
        return (this.props.formType === "/login") ? "Log In" : "Sign Up"
    }

    navLink() {
        return (this.props.formType === "/login") ? <Link to="/signup">Create an Account</Link> : <Link to="/login">Already have an account?</Link>
    }

    render() {
        return (
            <div class="session-form">
                <h1 class="text-center">Remote Auction House</h1>
                <h3>{this.header()}</h3>

                <ul>{this.errors()}</ul>

                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Username" value={this.state.username} onChange={this.updateInput("username")}/>
                    <input placeholder="Password" type="password" value={this.state.password} onChange={this.updateInput("password")}/>
                    <button>{this.button()}</button>
                </form>
                {this.navLink()}
            </div>
        )
    }

    updateInput(key) {
        return e => this.setState({[key]: e.currentTarget.value})
    };
}

export default SessionForm;