import { MainContainer, CardContainer, FriendsContainer, CardImg, ThingsUserLikesDiv, FollowingButton, TransparentButton, NameUser, CityUser } from '../../../../style-feed/FindFriends/layout.js'
import { connect } from 'react-redux';
import FindFriendsCard from '../FindFriendsCard'
import React from 'react';

class FindFriendsSearch extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    
    render (){
        return (
            <>        
            <MainContainer>
                <FriendsContainer>
                    <FindFriendsCard /> 
                </FriendsContainer>
            </MainContainer>
            </>
        )
    }
}
export default FindFriendsSearch;