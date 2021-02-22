import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TransparentButton } from "../../../../style/buttons.js";

const SignUpLink = () => {
    return (
        <div>
          <label>
            Don't have an account?
            <Link to="/sign-up/" >
            <TransparentButton>sign up</TransparentButton>
             </Link>
          </label>
        </div>
    )
}

const mapStateToProps = state => {

};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignUpLink);
export default ConnectedApp;