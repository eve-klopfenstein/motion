import { connect } from 'react-redux';
import React from 'react';
import SignUpLink from "./SignUpLink";
import SignInBody from "./SignInBody";
import { RightSide } from "../../../style/layout.js";
import { LeftSideHome } from "../left-side"

export const SignIn = () => {
    return (
        <>
          <section>
            <LeftSideHome />
          </section>
          <RightSide>
            <SignUpLink />
            <SignInBody />
          </RightSide>
        </>
    )
}

const mapStateToProps = state => {

};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignIn);
export default ConnectedApp; 
