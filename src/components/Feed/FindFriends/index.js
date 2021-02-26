import {NavBar}  from '../nav-bar';
import SearchBar from '../SearchBar';
import FindFriendsSearch from './FindFriendsSearch';
import { MenuPopUp } from '../nav-bar/MenuPopUp';
import { useState } from 'react';

const FindFriends = () => {
    const [showMenuPopUp, setShowMenuPopUp] = useState(false);
    
    return (
        <>
            { showMenuPopUp ? <MenuPopUp /> : null}
            <NavBar onClick={ () => setShowMenuPopUp(!showMenuPopUp)}/>
            <FindFriendsSearch />
        </>
    )
}

export default FindFriends;