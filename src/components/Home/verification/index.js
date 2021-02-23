import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled from 'styled-components';
import CompleteButton from "./CompleteButton";
import { withRouter } from "react-router-dom";
import { MiddleSection, H1 }from "../../../style/layout.js";
import { Input, InputDiv, }from "../../../style/inputs.js";
import { BigButton, ThreeDotsContainer, SmallDotTransparent, SmallDotBlack } from '../../../style/buttons';
import { Link } from 'react-router-dom'; 

const Form = styled.form`
display: grid;
grid-template-areas: 
"code code"
"email username"
"first second"
"pw pw2"
"button button";
`;

class Verification extends Component {
  constructor (props){
    super(props);
    this.state = {
      code: '',
      email: '', 
      username:'',
      first_name: '',
      last_name:'',
      password: '',
      password_repeat: ''
    }
  }
  
    setValidationCode = e => {
        this.setState({
            code: e.target.value
        });
    }
    setEmail = e => {
        this.setState({
            email: e.target.value
        });
    }
    setUser = e => {
        this.setState({
            username: e.target.value 
        });
    }

    setFirstname = e => {
        this.setState({
            first_name: e.target.value 
        });
    }

    setLastname = e => {
        this.setState({
            last_name: e.target.value 
        });
    }
    
    setPassword = e => {
        this.setState({
            password: e.target.value 
        });
    }

    setPassword2 = e => {
        this.setState({
            password_repeat: e.target.value 
        });
    }

  verification = (e) => {
    e.preventDefault();
      const url = "https://motion.propulsion-home.ch/backend/api/auth/registration/validation/";
      const method = 'PATCH';
      const body = {
          code: this.state.code,
          email: this.state.email,
          username: this.state.username,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          password: this.state.password,
          password_repeat: this.state.password_repeat,
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
      .then(res => res.status===200 ? console.log(res) : console.log('validation response not ok'))
    //   .then(data => {
    //         if (data.access){
    //         this.props.history.push("/feed");
    //       } else {
    //         this.props.history.push("/");
    //         this.setState({
    //             code: '',
    //             email: '', 
    //             username:'',
    //             first_name: '',
    //             last_name:'',
    //             password: '',
    //             password_repeat: ''
    //         });
    //       }
      //});
  }
  render(){
    return (
      <MiddleSection>
        <H1>Verification</H1>
        <Form onSubmit={ this.verification } >
          
          <InputDiv  style={{gridArea:"code", width:"650px"}}>
            <i className="val code" />
            <Input style={{width:"800px"}} value={ this.state.code } onChange={ this.setValidationCode } type="text" placeholder="Validation code" required />
          </InputDiv>
        
           <InputDiv>
            <i className="val email" />
            <Input value={ this.state.email } onChange={ this.setEmail } type="email" placeholder="Email" required />
          </InputDiv>
          <InputDiv>
            <i className="val user" />
            <Input value={ this.state.username } onChange={ this.setUser } type="text" placeholder="Username" required />
          </InputDiv>      
          <InputDiv>
            <i className="val firstname" />
            <Input value={ this.state.first_name } onChange={ this.setFirstname } type="text" placeholder="First name" required />
          </InputDiv>
          <InputDiv>
            <i className="val lastname" />
            <Input value={ this.state.last_name } onChange={ this.setLastname } type="text" placeholder="Last name" required />
          </InputDiv>
          <InputDiv>
            <i className="val password" />
            <Input value={ this.state.password } onChange={ this.setPassword } type="password" placeholder="Password" required />
          </InputDiv>
          <InputDiv>
            <i className="val repeat-password" />
            <Input value={ this.state.password_repeat } onChange={ this.setPassword2 } type="password" placeholder="Password repeat" required />
          </InputDiv>
          
          </Form>
          <CompleteButton />
          <ThreeDotsContainer>
                    <Link to='/sign-up/email'>
                        <SmallDotTransparent />
                    </Link>
                    <SmallDotTransparent />
                    <SmallDotBlack />
                </ThreeDotsContainer>
      </MiddleSection>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  }
};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(Verification);
export default withRouter(ConnectedApp);