import { connect } from "react-redux";
import { signup, login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({
    loggedIn: !!state.session.currentUser,
    errors: state.errors.session,
    formType: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => {
    let typeString = ownProps.location.pathname;
    let typeMethod = (typeString === "/") ? login : signup;

    return ({
        formType: typeString,
        processForm: (user) => dispatch(typeMethod(user))
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);