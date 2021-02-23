import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TransparentButton } from "../../../../style/buttons.js";

const SignUpContinue = () => {

    return (
        <div>
            <TransparentButton>Continue</TransparentButton>
        </div>
    )
}

const mapStateToProps = state => {

};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignUpContinue);
export default ConnectedApp;