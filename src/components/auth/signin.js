import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
    renderField(field){
        const { meta } = field;
        const className = `form-group ${meta.touched && meta.error ? 'has-danger': ''}`;
        return (
            <div className={className}>                
                <label htmlFor={field.id}>{field.label}</label>
                <small className="form-text text-muted text-danger">
                {meta.touched ? meta.error: ''}
                </small>
                <input
                    type={field.type}
                    className="form-control" 
                    id={field.id}
                    placeholder={field.label}
                    {...field.input}
                />
            </div>
        );
    }

    handleFormSubmit({ email, password }) {
        console.log(this.props);
        this.props.signinUser({email, password});
    }

    render(){
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field 
                    name="email" 
                    component={this.renderField}
                    label="Email"
                    id="signinEmail"
                    type="email"
                />
                <Field 
                    name="password" 
                    component={this.renderField}
                    label="Password"
                    id="signinPassword"
                    type="password"
                />
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signin'
}, null, actions)(Signin);