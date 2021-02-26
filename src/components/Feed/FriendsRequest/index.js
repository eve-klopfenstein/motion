import React from 'react';
import {connect} from 'react-redux';
import { CardContainer, CardImg, ThingsUserLikesDiv, FollowingButton, TransparentButton, NameUser, CityUser, InlineDiv, SpaceDiv, NameAvatarDiv, SplitDiv, CardImgPending} from '../../../style-feed/FriendRequest/layout.js'
 

class FriendsRequest extends React.Component {
    constructor(props){
    super(props)
    this.state = {}
}
    componentDidMount (){
       this.fetch()
       if(!this.props.user_id){
           const url='https://motion.propulsion-home.ch/backend/api/users/me/';
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
               .then(res => res.json())
               .then(data => {
                   console.log(data)
                this.props.dispatch({type: 'ADD_ID', payload: data.id});
                this.props.dispatch({type: 'ADD_FIRST_NAME', payload: data.first_name});
                this.props.dispatch({type: 'ADD_LAST_NAME', payload: data.last_name});
                this.props.dispatch({type: 'ADD_USERNAME', payload: data.username})
               })
       }
    }

    fetch = () => {
        const url='https://motion.propulsion-home.ch/backend/api/social/friends/requests/';
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
            .then(res => res.status ? res.json() : console.log('requests response not ok'))
            .then(data => {
            this.props.dispatch({type:'GET_REQUESTS',payload: data});
            })
 }

    render(){
        console.log("friends requests",this.props.requests)
        return(
            <>

             <div >
                <h3>Sent requests</h3>
             </div>
             {this.props.requests && this.props.user_id ? 
                this.props.requests.map(request =>
                {return request.status === "P" && request.receiver.id != this.props.user_id  ?             
                <SpaceDiv key={request.id} >  
                    <SplitDiv>
                    <NameAvatarDiv>      
                        <div><CardImg src={request.receiver.avatar}/> </div>
                            <div>
                                <div>{request.receiver.first_name} {request.receiver.last_name}</div>
                                <div>{request.receiver.location} </div>                 
                            </div>
                    </NameAvatarDiv>  
                    <div>
                        <CardImgPending src="https://cdn0.iconfinder.com/data/icons/fintech-solutions-line-24/24/pending_time_clock_watch_timer-512.png" />
                    </div>
                </SplitDiv> 
                </SpaceDiv> 
                : null } 
                ): "loading..."}
            </>
        )
    }
}

const mapStateToProps = state => {
    return{
        token: state.token,
        requests: state.requests,
        user_id: state.id
    }
}
const connection = connect(mapStateToProps)
const ConnectedApp = connection(FriendsRequest)
export default ConnectedApp;
