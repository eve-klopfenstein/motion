import { NavBar } from '../nav-bar';
import BackgroundPicture from './BackgroundPicture';
import ProfileBody from './ProfileBody';
import { ProfilePageContainer } from '../../../style-feed/Profile/layout.js';
import styled from 'styled-components';

const ProfilePage = () => {
    return (
        <ProfilePageContainer>
          <NavBar />
          <BackgroundPicture />
          <ProfileBody />
        </ProfilePageContainer>
    )
}


export default ProfilePage;