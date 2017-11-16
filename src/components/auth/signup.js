import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
    renderField(field){
        const { meta } = field;
        const className = `form-group ${meta.touched && meta.error ? 'has-danger': ''}`;
        return (
            <div className={className}>                
                <label htmlFor={field.id}>{field.label}</label>
                <input
                    type={field.type}
                    className="form-control" 
                    id={field.id}
                    placeholder={field.label}
                    {...field.input}
                />
                <small className="form-text text-muted text-danger">{meta.touched ? meta.error: ''}</small>
            </div>
        );
    }

    onSubmit(values){
        //console.log(values);
    }

    render(){
        const { handleSubmit } = this.props;

        return(
            <div className="row">
                <div className="col-md-6 col-md-push-3">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <h2 className="form-signin-heading">Please sign up</h2>
                        <Field 
                            name="email" 
                            component={this.renderField}
                            label="Email"
                            id="signupEmail"
                            type="email"
                        />
                        <Field 
                            name="password" 
                            component={this.renderField}
                            label="Password"
                            id="signupPassword"
                            type="password"
                        />
                        <Field 
                            name="confirmPassword" 
                            component={this.renderField}
                            label="Confirm Password"
                            id="signupConfirmPassword"
                            type="password"
                        />
                        <button action="submit" className="btn btn-primary">Sign up!</button>
                    </form>
                </div>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.email) {
        errors.email = "Enter a email!";
    }

    if(!values.password) {
        errors.password = "Enter some password!";
    }

    if(!values.confirmPassword) {
        errors.confirmPassword = "Enter password to confirm!";
    }

    if(values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords do not match";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'signup'
})(Signup);