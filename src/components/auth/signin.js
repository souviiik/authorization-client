import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
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
        // console.log(this.props);
        this.props.signinUser({ email, password });
    }

    renderError(){
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render(){
        const { handleSubmit } = this.props;

        return(
            <div className="row">
                <div className="col-md-6 col-md-push-3">
                    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                        <h2 className="form-signin-heading">Please sign in</h2>
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
                        {this.renderError()}
                        <button action="submit" className="btn btn-primary">Sign in</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { errorMessage: state.auth.error }
}

export default reduxForm({
    form: 'signin'
})(
    connect(mapStateToProps, actions)(Signin)
);