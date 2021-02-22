import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import SignIn from './components/Home/sign-in';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux"
import { Provider } from 'react-redux';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/Home/sign-up'

const initialState = {
    email: ""
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_EMAIL' : 
      return {...state, email: action.payload};
      break;
    }

}

const store = createStore(reducer);


ReactDOM.render(
  <Provider store={ store } >
  <Router>
    <Switch>
   
    <Route exact path="/sign-up" component={ SignUp } />
      {/* <Route exact path="/sign-up" component={ SignUp } /> */}
    </Switch>
  </Router>
</Provider>,
  document.getElementById('root')
);

 //<Route exact path="/" component={ SignIn } />

reportWebVitals();
