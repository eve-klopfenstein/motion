import { NavBar } from '../nav-bar';
import BackgroundPicture from './BackgroundPicture';
import ProfileBody from './ProfileBody';
import { ProfilePageContainer } from '../../../style-feed/Profile/layout.js';
import { useState } from 'react';
import { MenuPopUp } from '../nav-bar/MenuPopUp';

const ProfilePage = () => {
    const [showMenuPopUp, setShowMenuPopUp] = useState(false);

    return (
        <ProfilePageContainer>
          { showMenuPopUp ? <MenuPopUp page='profile' /> : null}
          <NavBar onClick={ () => setShowMenuPopUp(!showMenuPopUp)}/>
          <BackgroundPicture />
          <ProfileBody />
        </ProfilePageContainer>
    )
}


export default ProfilePage;