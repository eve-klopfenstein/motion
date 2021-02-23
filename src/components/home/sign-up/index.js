import React from 'react';
import {useState} from 'react'
import styled from 'styled-components'
import SignInLink from "./SignInLink";
import SignUpBody from './SignUpBody';
import Verification from '.././verification';

const SignUp = (props) => {
    return (
        <>
        <HomeContainer>
          <LeftSideHome />
          <RightSide>
          <SignInLink />
          <SignUpBody />
          <Verification />
          </RightSide>
        </HomeContainer>
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
