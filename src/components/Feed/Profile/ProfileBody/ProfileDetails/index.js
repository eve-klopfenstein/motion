import { ProfileDetailsContainer, ProfileDetailsRight, ProfileDetailsLeft,
UpperRightDiv, LowerRightDiv, UpperRightLeft, UpperRightRight } from '../../../../../style-feed/Profile/layout.js';
import someoneImg from '../../../../../assets/images/users/jennifer.png';
import { TransparentButton } from '../../../../../style/buttons.js';
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from '../../../../../store/actions/getAllPosts.js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileDetails = () => {
    const firstName = useSelector(state => state.first_name);
    const lastName = useSelector(state => state.last_name);
    const id = useSelector(state => state.id);
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState([]);

    useEffect( () => {
        const getProfileFunc = async () => {
            const allInfo = await dispatch( getProfile());
            setUserInfo(allInfo);
            console.log(allInfo);
        }
        getProfileFunc();
    }, [])

    return (
        <ProfileDetailsContainer>
            <ProfileDetailsLeft>
                <img src={ someoneImg } />
                <p>{ `${firstName} ${lastName}` }</p>
                <span>Zürich, Switzerland</span>
                <Link to={`/feed/${id}/edit-profile`} >
                    <TransparentButton>EDIT PROFILE</TransparentButton>
                </Link>
            </ProfileDetailsLeft>
            <ProfileDetailsRight>
                <UpperRightDiv>
                    <UpperRightLeft>
                        <div>
                            <h2>about</h2>
                            <p>{ userInfo.about_me }</p>
                        </div>
                        <section>
                            <div>
                                <h2>Email</h2>
                                <p>{ userInfo.email }</p>
                            </div>
                            <div>
                                <h2>Phone</h2>
                                <p>12345678</p>
                            </div>
                        </section>
                    </UpperRightLeft>
                    <UpperRightRight>
                        <h2>Things I like</h2>
                    </UpperRightRight>
                </UpperRightDiv>
                <LowerRightDiv>
                    <div>
                        <span>
                            { userInfo.amount_of_posts }
                        </span>
                        <p>Posts</p>
                    </div>
                    <div>
                        <span>
                            { userInfo.amount_of_likes }
                        </span>
                        <p>Likes</p>
                    </div>
                    <div>
                        <span>
                            { userInfo.amount_of_friends }
                        </span>
                        <p>Friends</p>
                    </div>
                    <div>
                        <span>
                            { userInfo.amount_of_followers }
                        </span>
                        <p>Followers</p>
                    </div>
                    <div>
                        <span>
                            { userInfo.amount_following }
                        </span>
                        <p>Following</p>
                    </div>
                </LowerRightDiv>
            </ProfileDetailsRight>
        </ProfileDetailsContainer>
    )
}

export default ProfileDetails;