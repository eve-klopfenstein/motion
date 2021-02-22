import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled from 'styled-components';
import SignInButton from "../SignInButton";
import { withRouter } from "react-router-dom";
import { MiddleSection, H1 }from "../../../../style/layout.js";
import { Input }from "../../../../style/inputs.js";

class SignInBody extends Component {
  constructor (props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  
  Form = styled.form`
    display: flex;
    flex-direction: column;
  `

  setEmail = e => {
      this.setState({
          email: e.target.value
      });
  }
  setPassword = e => {
      this.setState({
          password: e.target.value 
      });
  }
  login = (e) => {
    e.preventDefault();
      const url = "https://motion.propulsion-home.ch/backend/api/auth/token/";
      const method = 'POST';
      const body = {
          email: this.state.email,
          password: this.state.password
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
      .then(res => res.status ? res.json() : console.log('login response not ok'))
      .then(data => {
          const token = data.access;
          this.props.dispatch({type: 'SET_TOKEN', payload: token});
          if (data.access){
            this.props.history.push("/feed");
          } else {
            this.props.history.push("/");
            this.setState({
              email: '',
              password: ''
            });
          }
      });
  }
  render(){
    return (
      <MiddleSection>
        <H1>Sign in</H1>
        <this.Form onSubmit={ this.login } >
          <Input value={ this.state.email } onChange={ this.setEmail } type="email" placeholder="Username" required />
          <Input value={ this.state.password } onChange={ this.setPassword } type="password" placeholder="Password" required />
          <SignInButton />
        </this.Form>
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
const ConnectedApp = connection(SignInBody);
export default withRouter(ConnectedApp);