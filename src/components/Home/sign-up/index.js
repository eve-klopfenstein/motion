import React from 'react';
import { connect } from 'react-redux';
import SignInLink from "./SignInLink";
import SignUpBody from './SignUpBody';
import { HomeContainer, RightSide } from '../../../style/layout.js';
import LeftSideHome from '../left-side';

const SignUp = (props) => {
    return (
        <HomeContainer>
          <LeftSideHome />
          <RightSide>
          <SignInLink />
          <SignUpBody />
          </RightSide>
        </HomeContainer>
    )
}

const mapStateToProps = () => {
    return {
        
    };
}

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignUp);
export default ConnectedApp;
