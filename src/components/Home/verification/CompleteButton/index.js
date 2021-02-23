import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { BigButton } from "../../../../style/buttons";

const CompleteButton = () => {
    return (
        <div>
          <BigButton type="submit">Complete</BigButton>
        </div>
    )
}

const mapStateToProps = state => {
    return {
    }
};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(CompleteButton);
export default ConnectedApp;