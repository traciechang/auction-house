import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            errors: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn) {
            this.props.history.push('/');
        }

        if (nextProps.errors) {
            this.setState({
                "errors": nextProps.errors
            })
        }

        if (nextProps.formType !== this.props.formType) {
            this.setState({
                "username": "",
                "password": "",
                "errors": []
            })
        }
    }

    button() {
        return (this.props.formType === "/login") ? "Log In" : "Create Account"
    }

    errors() {
        return this.state.errors.map(err => <li class="text-center text-light" key={err}>{err}</li>)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.processForm(this.state)
    }

    header() {
        return (this.props.formType === "/login") ? "Log In" : "Sign Up"
    }

    navLink() {
        return (this.props.formType === "/login") ? <Link to="/signup" class="col-sm-5 mx-auto text-center session-link">Create an Account</Link> : <Link to="/login" class="col-sm-5 mx-auto text-center session-link">Already have an account?</Link>
    }

    render() {
        return (
            <div class="session-form">
                <div className="text-center">
                    <img src="http://res.cloudinary.com/dcf4iyb6t/image/upload/v1522723405/Logos/New_WorldOfWarcraft_logo_small.png"/>
                </div>
                <h1 class="text-center">Remote Auction House</h1>

                <div class="row">
                <h3 class="col-sm-5 text-center mx-auto text-light session-form-h3">{this.header()}</h3>
                </div>

                <div class="row">
                <ul class="col-sm-5 mx-auto session-form-errors">{this.errors()}</ul>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div class="row">
                    <input class="col-sm-5 col-md-4 col-lg-3 mx-auto" placeholder="Username" value={this.state.username} onChange={this.updateInput("username")}/>
                    </div>
                    
                    <div class="row">
                    <input class="col-sm-5 col-md-4 col-lg-3 mx-auto" placeholder="Password" type="password" value={this.state.password} onChange={this.updateInput("password")}/>
                    </div>

                    <div class="row">
                    <button class="col-sm-5 col-md-4 col-lg-3 mx-auto session-form-button">{this.button()}</button>
                    </div>
                </form>
                <div class="row">
                {this.navLink()}
                </div>
            </div>
        )
    }

    updateInput = (key) => {
        return e => this.setState({[key]: e.currentTarget.value})
    };
}

export default SessionForm;