import {NavBar}  from '../nav-bar';
import SearchBar from '../SearchBar';
import FindFriendsSearch from './FindFriendsSearch';
import FriendsRequest from '../FriendsRequest';


const FindFriends = () => {
    
    return (
        <>
        <NavBar /> 
         <FriendsRequest />
        <FindFriendsSearch />
        </>
    )
}

export default FindFriends;