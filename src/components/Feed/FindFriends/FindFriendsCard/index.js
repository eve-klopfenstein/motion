import { CardContainer, CardImg, ThingsUserLikesDiv, FollowingButton, TransparentButton, NameUser, CityUser } from '../../../../style-feed/FindFriends/layout.js'
import { connect } from 'react-redux';
import React from 'react';

class FindFriendsCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.fetch()
    }

    ToggleFollow = (id) => {
        const url=`https://motion.propulsion-home.ch/backend/api/social/followers/toggle-follow/${id}/`
        const method='POST';
        const headers = new Headers({
            'Content-type':'application/json',
            'Authorization' : `Bearer ${this.props.token}`
        });
        const config = {
            method: method,
            headers: headers,
        };
        fetch(url,config)
            .then(res => {
                if(res.status===200){
                this.fetch()
                }
             })
    }

    ToggleFriend = (id) => {
        const url=`https://motion.propulsion-home.ch/backend/api/social/friends/request/${id}/`
        const method='POST';
        const headers = new Headers({
            'Content-type':'application/json',
            'Authorization' : `Bearer ${this.props.token}`
        });
        const config = {
            method: method,
            headers: headers,
        };
        fetch(url,config)
            .then(res => {
                console.log(res.status)
                if(res.status===200){
                this.fetch()
                }
             })
    }

    fetch = () => {
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
        
            return (
            <>    
                        {this.props.users.length?this.props.users.map((user, index) =>
                            <CardContainer className={user.id}>  
                                <CardImg src={user.avatar}/>
                                <NameUser>{user.first_name} {user.last_name}</NameUser>
                                <CityUser>{user.location} </CityUser>
                               
                                <CityUser><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{user.about_me}</p></CityUser>
                                {user.logged_in_user_is_following? <FollowingButton onClick={(e)=> {e.preventDefault();this.ToggleFollow(user.id)}}>FOLLOWING</FollowingButton> :<TransparentButton onClick={(e)=> {e.preventDefault();this.ToggleFollow(user.id)}}>FOLLOW</TransparentButton>}                      
                                {user.logged_in_user_is_friends? <TransparentButton onClick={(e)=> {e.preventDefault();this.ToggleFriend(user.id)}}>FRIEND</TransparentButton> :<TransparentButton onClick={(e)=> {e.preventDefault();this.ToggleFriend(user.id)}}>ADD FRIEND</TransparentButton>}
                                
                                {user.things_user_likes.map((things)=><ThingsUserLikesDiv>{things}</ThingsUserLikesDiv>)}
                            </CardContainer>
                        ):"loading"}
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
const ConnectedApp = connection(FindFriendsCard)
export default ConnectedApp;