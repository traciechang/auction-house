import { connect } from "react-redux";
import { signup, login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state) => ({
    loggedIn: !!state.session.currentUser,
    errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => {
    let typeString = ownProps.location.pathname;
    let typeMethod = (typeString === "/login") ? login : signup;

    return ({
        formType: typeString,
        processForm: (user) => dispatch(typeMethod(user))
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);