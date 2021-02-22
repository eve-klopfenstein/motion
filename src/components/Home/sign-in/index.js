import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components'
import SignUpLink from "./SignUpLink";
import SignInBody from "../sign-up/SignUpBody";

const SignIn = () => {
    return (
        <section>
          <SignUpLink />
          <SignInBody />
        </section>
    )
}

const mapStateToProps = state => {

};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignIn);
export default ConnectedApp;
