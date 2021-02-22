import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './components/Home/sign-in';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux"
import { Provider } from 'react-redux';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const initialState = {

};

const reducer = (state = initialState, action) => {

}

const store = createStore(reducer);


ReactDOM.render(
  <Provider store={ store } >
  <Router>
    <Switch>
      <Route exact path="/" component={ SignIn } />
      {/* <Route exact path="/sign-up" component={ SignUp } /> */}
    </Switch>
  </Router>
</Provider>,
  document.getElementById('root')
);



reportWebVitals();
