import { NavBar } from '../nav-bar';
import BackgroundPicture from '../Profile/BackgroundPicture';
import { ProfilePageContainer } from '../../../style-feed/Profile/layout.js';
import EditProfileBody from './EditProfileBody';

const EditProfilePage = () => {
    return (
        <ProfilePageContainer>
            <NavBar />
            <BackgroundPicture />
            <EditProfileBody />
        </ProfilePageContainer>
    )
}

export default EditProfilePage;