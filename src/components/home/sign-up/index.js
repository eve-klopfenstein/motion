import { connect } from 'react-redux';
import React from 'react';
import {useState} from 'react'
import styled from 'styled-components'
import SignInLink from "./SignInLink";
import SignUpBody from "./SignUpBody";
import SignUpContinue from "./SignUpContinue"

const SignUp = (props) => {
    const [email, setEmail] = useState('');
    
    
    const register = e => {
        e.preventDefault();
        console.log(email);
        const url = "https://motion.propulsion-home.ch/backend/api/auth/registration/";
        const method = 'POST';
        const body = {
           email: email
        };
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const config = {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
        };
        fetch(url, config)
        .then(res => res.status ? res.json() : console.log('login response not ok'))
        .then(data => {
            props.dispatch({type: 'ADD_EMAIL', payload: email});
        });
    }


    return (
        <>  
            <form className="sign-up" >
                <div>
                    <p>Already have an account?</p>
                    <button type="button" >Continue</button>
                </div>
                             
                 <div className="form-tab">
                    <h2>Sign Up</h2>
                     <input type="email" placeholder="E-mail" value={ email } onChange={ event => setEmail(event.target.value) } />
                 </div>                 
                    
                <div className="btn-container" >
                    <button type="button" onClick={ register } >Continue</button>
                </div>              
            </form>
        </>
    )
}

const mapStateToProps = () => {
    return {
        
    };
}

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignUp);
export default ConnectedApp;
