import { NavBar } from '../nav-bar';
import BackgroundPicture from '../Profile/BackgroundPicture';
import { ProfilePageContainer } from '../../../style-feed/Profile/layout.js';

const EditProfilePage = () => {
    return (
        <ProfilePageContainer>
            <NavBar />
            <BackgroundPicture />
        </ProfilePageContainer>
    )
}

export default EditProfilePage;