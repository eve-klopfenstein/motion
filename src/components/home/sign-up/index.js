import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components'
import SignInLink from "./SignInLink";
import SignUpBody from "./SignUpBody";
import SignUpContinue from "./SignUpContinue"


const SignUp = () => {
    return (
        <section>
            <h1>test</h1>
            <SignInLink />
            <SignUpBody />
            <SignUpContinue />
        </section>
    )
}

const mapStateToProps = state => {
 return{state}
};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignUp);
export default ConnectedApp;
{/*  */}
//