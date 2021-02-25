import { NavBar } from '../nav-bar';
import BackgroundPicture from './BackgroundPicture';
import ProfileBody from './ProfileBody';
import { ProfilePageContainer } from '../../../style-feed/Profile/layout.js';

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