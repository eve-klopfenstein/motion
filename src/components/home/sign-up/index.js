import React from 'react';
import { connect } from 'react-redux';
import { HomeContainer, RightSide, UpperSection, UpperSectionLabel } from '../../../style/layout';
import {LeftSideHome} from '../left-side';
import SignInLink from "./SignInLink";
import SignUpBody from './SignUpBody';

const SignUp = (props) => {
    return (
        <>
        <HomeContainer>
          <LeftSideHome />
          <RightSide>
          <SignInLink />
          <SignUpBody />
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
