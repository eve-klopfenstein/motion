import { NavBar } from './nav-bar';
import SearchBar from './SearchBar'
import PostsBody from './posts/'
import React, { useState } from 'react';
import { FeedComtainer, PopUpContainer } from '../../style-feed/Posts/layout.js';
import { CloseButton } from '../../style-feed/button.js';
import NewPostPopup from './NewPostPopup';

const Feed = () => {
    const [showPopUp, setshowPopUp] = useState(false);

    return (
        <FeedComtainer>
            { showPopUp ? <PopUpContainer>
              <CloseButton onClick={ () => setshowPopUp(false) } >x</CloseButton>
              <NewPostPopup />
            </PopUpContainer> : null}
            <NavBar />
            <SearchBar />
            <PostsBody showPopUp={ showPopUp } setshowPopUp={ setshowPopUp } />
        </FeedComtainer>
    )
}

export default Feed;