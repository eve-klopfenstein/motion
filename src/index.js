import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './components/Home/sign-in';
import SignUp from "./components/Home/sign-up";
import Congratulations from "./components/Home/congratulations";
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import {combineReducers } from 'redux';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const initialState = {
  token: '',
  email: '',
  id: ''
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {...state, token: action.payload};
      break;
    case 'ADD_EMAIL':
      console.log(action.payload);
      return {...state, email: action.payload};
      break;
    case 'ADD_ID':
      return {...state, id: action.payload};
      break;
    default:
      return state;
      break;
  }
}


const store = createStore(reducer);


ReactDOM.render(
<Provider store={ store } >
  <Router>
    <Switch>
      <Route exact path="/" component={ SignIn } />
      <Route exact path="/sign-up/email" component={ SignUp } />
      <Route exact path="/sign-up/congratulations/" component={ Congratulations } />
      {/* <Route exact path="/sign-up/verification/" component={ Verification }/>     */}
    </Switch>
  </Router>
</Provider>,
  document.getElementById('root')
);

reportWebVitals();
{/*  */}
{/*  */}