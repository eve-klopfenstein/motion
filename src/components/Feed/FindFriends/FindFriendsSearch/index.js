import { MainContainer, CardContainer, FriendsContainer, CardImg, ThingsUserLikesButton, FollowingButton, TransparentButton } from '../../../../style-feed/FindFriends/layout.js'
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
               
            <button onClick={this.fetch}>find friends</button>
            <MainContainer>
                <FriendsContainer>
                   
                    {this.props.users.map((user, index) => 
                             <CardContainer className={user.id}>  
                             <CardImg src={user.avatar}/>
                            <div><h1>{user.first_name} {user.last_name}</h1></div>
                            <div><p>{user.location}</p> </div> 
                            <div><p>{user.about_me}</p></div>
                            <div> <FollowingButton value={user.logged_in_user_is_following?"Following": ""} />                      
                            <TransparentButton /></div>
                            <div>{user.things_user_likes.map((things)=><ThingsUserLikesButton>{things}</ThingsUserLikesButton>)}</div>
                            </CardContainer>
                     )}
                   
                </FriendsContainer>
            </MainContainer>

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