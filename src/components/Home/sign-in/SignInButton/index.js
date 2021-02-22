import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignInButton = () => {
    return (
        <div>
          <button type="submit">sign in</button>
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