import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './components/Home/sign-in';
import SignUp from "./components/Home/sign-up";
import Verification from "./components/Home/verification";
import Congratulations from "./components/Home/congratulations";
import reportWebVitals from './reportWebVitals';
import Feed from './components/Feed';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FindFriends from './components/Feed/FindFriends';

const initialState = {
  token: '',
  email: '',
  id: '',
  first_name: '',
  last_name: '',
  user_name: ''
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
    case 'ADD_FIRST_NAME':
      return {...state, first_name: action.payload};
      break;
    case 'ADD_LAST_NAME':
      return {...state, last_name: action.payload};
      break;
    case 'ADD_USERNAME':
      return {...state, user_name: action.payload};
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
      <Route exact path="/sign-up/email/" component={ SignUp } />
      <Route exact path="/sign-up/congratulations/" component={ Congratulations } />
      <Route exact path="/sign-up/verification/" component={ Verification }/>     
      <Route exact path="/feed/:id/" component={ Feed } />
      <Route exact path="/feed/:id/find-friends/" component={ FindFriends } />
    </Switch>
  </Router>
</Provider>,
document.getElementById('root')
);

reportWebVitals();