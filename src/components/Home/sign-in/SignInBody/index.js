import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import SignInButton from "../SignInButton";

const SignInBody = () => {
    return (
        <div>
          <h1>Sign in</h1>
          <form>
            <input type="email" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <SignInButton />
          </form>
        </div>
    )
}

const mapStateToProps = state => {
  
};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignInBody);
export default ConnectedApp;