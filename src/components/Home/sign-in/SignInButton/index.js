import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignInButton = () => {
    return (
        <div>
          <Link to="/feed" >
             <button type="submit">sign in</button>
          </Link>
        </div>
    )
}

const mapStateToProps = state => {


};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignInButton);
export default ConnectedApp;