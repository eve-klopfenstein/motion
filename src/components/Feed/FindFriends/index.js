import {NavBar}  from '../nav-bar';
import SearchBar from '../SearchBar';
import FindFriendsSearch from './FindFriendsSearch';
import FriendsRequest from '../FriendsRequest';
import { MenuPopUp } from '../nav-bar/MenuPopUp';
import { useState } from 'react';

const FindFriends = () => {
    const [showMenuPopUp, setShowMenuPopUp] = useState(false);
    
    return (
        <>
            { showMenuPopUp ? <MenuPopUp /> : null}
            <NavBar onClick={ () => setShowMenuPopUp(!showMenuPopUp)}/>
            <FriendsRequest />
            <FindFriendsSearch />
        </>
    )
}

export default FindFriends;