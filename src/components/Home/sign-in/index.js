import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components'
import SignUpLink from "./SignUpLink";
import SignInBody from "./SignInBody";

const SignIn = () => {
    return (
        <RightSide>
          <SignUpLink />
          <SignInBody />
        </RightSide>
    )
}

const mapStateToProps = state => {

};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignIn);
export default ConnectedApp;
