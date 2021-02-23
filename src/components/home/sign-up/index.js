import React from 'react';
import { connect } from 'react-redux';
import { HomeContainer, RightSide, UpperSection, UpperSectionLabel } from '../../../style/layout';
import {LeftSideHome} from '../left-side';
import SignInLink from "./SignInLink";
import SignUnBody from './SignUnBody';

const SignUp = (props) => {
    return (
        <>
        <HomeContainer>
          <LeftSideHome />
          <RightSide>
          <SignInLink />
          <SignUnBody />
          </RightSide>
        </HomeContainer>
        </>
    )
}

const mapStateToProps = () => {
    return {
        
    };
}

export default connect(mapStateToProps)(SignUp);
