import { ProfileDetailsContainer, ProfileDetailsRight, ProfileDetailsLeft, UpperRightDiv, LowerRightDiv } from '../../../../../style-feed/Profile/layout.js';
import someoneImg from '../../../../../assets/images/users/jennifer.png';
import { TransparentButton } from '../../../../../style/buttons.js';
import { useSelector } from "react-redux";


const ProfileDetails = () => {
    const firstName = useSelector(state => state.first_name);
    const lastName = useSelector(state => state.last_name);

    return (
        <ProfileDetailsContainer>
            <ProfileDetailsLeft>
                <img src={ someoneImg } />
                <p>{ `${firstName} ${lastName}` }</p>
                <span>Zürich, Switzerland</span>
                <TransparentButton>EDIT PROFILE</TransparentButton>
            </ProfileDetailsLeft>
            <ProfileDetailsRight>
                <UpperRightDiv>

                </UpperRightDiv>
                <LowerRightDiv>
                    <div>Posts</div>
                    <div>Likes</div>
                    <div>Friends</div>
                    <div>Followers</div>
                    <div>Following</div>
                </LowerRightDiv>
            </ProfileDetailsRight>
        </ProfileDetailsContainer>
    )
}

export default ProfileDetails;