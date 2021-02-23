import { connect } from 'react-redux';
import { H1, MiddleSection } from '../../../../style/layout';
import { Input, InputDiv } from '../../../../style/inputs.js';
import ContinueButton from "../ContinueButton";
import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const SignUnBody = (props) => {

    const [email, setEmail] = useState('');
    
    const register = e => {
        e.preventDefault();
        const url = "https://motion.propulsion-home.ch/backend/api/auth/registration/";
        const method = 'POST';
        const body = {
           email: email
        };
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const config = {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
        };
        fetch(url, config)
        .then(res => res.status)
        .then(status => {
            if (status === 200){
                props.dispatch({type: 'ADD_EMAIL', payload: email});
                props.history.push("/sign-up/congratulations/");
            } else {
                console.log("response not ok");
            }
        });
    }

    return (
        <MiddleSection>
          <H1>Sign Up</H1>
          <Form onSubmit={ register }>
            <InputDiv>
              <i className="fas fa-envelope input-i" />
              <Input type="email" placeholder="   Email" value={ email } onChange={ event => setEmail(event.target.value) } required />
            </InputDiv>
            <ContinueButton />
          </Form>
       </MiddleSection>
    )
}

const mapStateToProps = () => {
    return {
        
    };
}

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignUnBody);
export default withRouter(ConnectedApp);