import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { BigButton } from "../../../../style/buttons";

const NewButton = styled(BigButton)`
    margin-top: 80px;
`

const CompleteButton = () => {
    return (
        <div>
          <NewButton type="submit">complete</NewButton>
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