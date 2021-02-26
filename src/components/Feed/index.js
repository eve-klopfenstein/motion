import { NavBar } from './nav-bar';
import SearchBar from './SearchBar'
import PostsBody from './posts/'
import React, { useState } from 'react';
import { FeedComtainer, PopUpContainer } from '../../style-feed/Posts/layout.js';
import { CloseButton } from '../../style-feed/button.js';
import { DeletePostPopUp } from './DeletePostPopUp';
import NewPostPopup from './NewPostPopup';
import { MenuPopUp } from './nav-bar/MenuPopUp'

const Feed = (props) => {
    const [showPopUp, setshowPopUp] = useState(false);
    const [showDeletePopUp, setShowDeletePopUp] = useState(false);
    const [showMenuPopUp, setShowMenuPopUp] = useState(false);

    return (
        <FeedComtainer>
            { showPopUp ? <PopUpContainer>
              <CloseButton onClick={ () => setshowPopUp(false) } >x</CloseButton>
              <NewPostPopup showPopUp={ showPopUp } setshowPopUp={ setshowPopUp } />
            </PopUpContainer> : null}
            { showDeletePopUp ? 
                <PopUpContainer>
                    <CloseButton onClick={ () => setShowDeletePopUp(false) } >x</CloseButton>
                    <DeletePostPopUp 
                        closePopUp={ () => setShowDeletePopUp(false) } 
                    />
                </PopUpContainer> 
                : null}
            { showMenuPopUp ? <MenuPopUp /> : null}
            <NavBar onClick={ () => setShowMenuPopUp(!showMenuPopUp)} />
            <SearchBar />
            <PostsBody 
                showPopUp={ showPopUp } 
                setshowPopUp={ setshowPopUp }
                showDeletePopUp={ showDeletePopUp }
                setShowDeletePopUp={ setShowDeletePopUp } 
            />
        </FeedComtainer>
    )
}

export default Feed;