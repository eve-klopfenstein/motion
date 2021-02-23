import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './components/Home/sign-in';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux"
import { Provider } from 'react-redux';
import {combineReducers } from 'redux';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/Home/sign-up'

const initialState = {
    email: "",
    token: '',
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
      <Route exact path="/sign-up" component={ SignUp } /> 
    </Switch>
  </Router>
</Provider>,
  document.getElementById('root')
);
//<SignUp />
 //<Route exact path="/" component={ SignIn } />

reportWebVitals();
{/*  */}
{/*  */}