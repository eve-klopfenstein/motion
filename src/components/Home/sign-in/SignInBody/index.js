import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled from 'styled-components';
import SignInButton from "../SignInButton";

class SignInBody extends Component {
  constructor (props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

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
          console.log(data);
          const token = data.access;
          this.props.dispatch({type: 'SET_TOKEN', payload: token});
          this.setState({
              email: '',
              password: ''
          });
      });
  }
  render(){
    return (
      <div>
        <h1>Sign in</h1>
        <form action={ this.props.token ? "/feed" : "/" } onSubmit={ this.login } >
          <input value={ this.state.email } onChange={ this.setEmail } type="email" placeholder="Username" />
          <input value={ this.state.password } onChange={ this.setPassword } type="password" placeholder="Password" />
          <SignInButton login={ this.login } />
        </form>
      </div>
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
export default ConnectedApp;