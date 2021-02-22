import { connect } from 'react-redux';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SignUpContinue from "../SignUpContinue";

const SignUpBody = (props) => {
  const [email, setEmail] = useState('');

  const continueHandler = (event) => {
    event.preventDefault();
  } 

    return (
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={props.dispatch({type: "ADD_EMAIL", payload: email})}>
            <label>E-mail<input type="email" placeholder="E-mail" value={email} />
            </label>
               <SignUpContinue />
          </form>
        </div>
    )       
}

const mapStateToProps = state => {
  return {state}
};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignUpBody);
export default ConnectedApp;