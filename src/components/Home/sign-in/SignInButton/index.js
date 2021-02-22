import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { BigButton } from "../../../../style/buttons";

const SignInButton = () => {
    return (
        <div>
          <BigButton type="submit">sign in</BigButton>
        </div>
    )
}

const mapStateToProps = state => {
    return {
    }
};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignInButton);
export default ConnectedApp;