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
import SignUp from './components/Home/sign-up'

const initialState = {
  token: '',
  email: ''
};

const reducer1 = (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_EMAIL' : 
      return {...state, email: action.payload};
      break;
    }
 
  
};

const reducer2 = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {...state, token: action.payload};
      break;
    case 'ADD_EMAIL':
      console.log(action.payload);
      return {...state, email: action.payload};
      break;
    default:
      return state;
      break;
  }
}

const combineReducer = combineReducers({
    reducer1,reducer2
})

const store = createStore(combineReducer);


ReactDOM.render(
<Provider store={ store } >
  <Router>
    <Switch>
      <Route exact path="/" component={ SignIn } />
<<<<<<< HEAD
      <Route exact path="/sign-up" component={ SignUp } /> 
=======
      <Route exact path="/sign-up/email" component={ SignUp } />
      <Route exact path="/sign-up/congratulations/" component={ Congratulations } />
>>>>>>> development
    </Switch>
  </Router>
</Provider>,
  document.getElementById('root')
);
<<<<<<< HEAD
//<SignUp />
 //<Route exact path="/" component={ SignIn } />
=======
>>>>>>> development

reportWebVitals();
{/*  */}
{/*  */}