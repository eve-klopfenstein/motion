import { ProfileBodyMain } from '../../../../style-feed/Profile/layout.js';
import ProfileDetails from './ProfileDetails';
import ProfilePosts from './ProfilePosts';

const ProfileBody = () => {
    return (
        <ProfileBodyMain>
            <ProfileDetails />
            <ProfilePosts />
        </ProfileBodyMain>
    )
}

export default ProfileBody;