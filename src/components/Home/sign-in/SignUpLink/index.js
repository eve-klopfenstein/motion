import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TransparentButton } from "../../../../style/buttons.js";
import { UpperSection, UpperSectionLabel, UpperSectionDiv } from "../../../../style/layout.js";

const SignUpLink = () => {
    return (
        <UpperSection>
          <UpperSectionDiv>
            <UpperSectionLabel htmlFor="transparent-button" >Don't have an account?</UpperSectionLabel>
            <Link to="/sign-up/email" >
              <TransparentButton id="transparent-button" >sign up</TransparentButton>
            </Link>
          </UpperSectionDiv>
        </UpperSection>
    )
}

const mapStateToProps = state => {

};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignUpLink);
export default ConnectedApp;