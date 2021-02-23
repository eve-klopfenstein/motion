import { connect } from 'react-redux';
import React from 'react';
import SignUpLink from "./SignUpLink";
import SignInBody from "./SignInBody";
import { RightSide, HomeContainer } from "../../../style/layout.js";
import { LeftSideHome } from "../left-side"

export const SignIn = () => {
    return (
        <HomeContainer>
          <LeftSideHome />
          <RightSide>
            <SignUpLink />
            <SignInBody />
          </RightSide>
        </HomeContainer>
    )
}

const mapStateToProps = state => {

};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignIn);
export default ConnectedApp; 
