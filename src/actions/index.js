import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
    AUTH_USER, 
    UNAUTH_USER, 
    AUTH_ERROR 
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({email, password}){
    return function (dispatch){
        axios.post(`${ROOT_URL}/signin`, { email, password })
        .then(response => {
            dispatch({ type: AUTH_USER });
            // save the JWT token
            localStorage.setItem('token', response.data.token);
            // redirect to the route 'feature'
            browserHistory.push('/feature');
        })
        .catch(() => {
            // if request is bad
            // show an error to the user
            dispatch(authError('Bad login info'));
        });
    }
}

export function signoutUser(){
    localStorage.removeItem('token');

    return {
        type: UNAUTH_USER
    };
}

export function authError(error){
    return {
        type: AUTH_ERROR,
        payload: error
    }
}