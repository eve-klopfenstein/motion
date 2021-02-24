import { connect } from 'react-redux';
import React from 'react';

class FindFriendsSearch extends React.Component {
    constructor(props){
    super(props)
    this.state = {
     
    }
}

     fetch = (e) => {
        e.preventDefault();
        const url='https://motion.propulsion-home.ch/backend/api/users/';
        const method='GET';
        console.log(this.props.token)
        const headers = new Headers({
            'Content-type':'application/json',
            'Authorization' : `Bearer ${this.props.token}`
        });
        const config = {
            method: method,
            headers: headers,
        };

        fetch(url,config)
            .then(res => res.status ? res.json() : console.log('users response not ok'))
            .then(data => {
               this.props.dispatch({type:'GET_USERS',payload: data});
            })
     }

    render (){
        console.log(this.props)
        return (
            <>
            <h1>test</h1>
            <button onClick={this.fetch}>find friends</button>

            </>
        )
    }
}

const mapStateToProps = state => {
    return{
        token: state.token,
        users: state.users
    };
}
const connection = connect(mapStateToProps)
const ConnectedApp = connection(FindFriendsSearch)
export default ConnectedApp;