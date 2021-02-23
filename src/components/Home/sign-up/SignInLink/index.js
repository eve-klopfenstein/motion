import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TransparentButton } from "../../../../style/buttons.js";

const SignInLink = () => {
    return (
        <div>
              <label htmlFor='trasparent-button'>
            Already have an account?     
            </label>
            <Link to="/sign-in/" >
                <TransparentButton id='trasparent-button'> Sign In</TransparentButton>
             </Link>
        </div>
    )
}

const mapStateToProps = state => {

};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignInLink);
export default ConnectedApp;