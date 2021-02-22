import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './components/Home/sign-in';
import SignUp from "./components/Home/sign-up";
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux"
import { Provider } from 'react-redux';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const initialState = {
  token: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {...state, token: action.payload};
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
    </Switch>
  </Router>
</Provider>,
  document.getElementById('root')
);



reportWebVitals();
