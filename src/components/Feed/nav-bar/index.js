import { NavBarContainer, LeftNavBarDiv, RightNavBarDiv, LogoDiv, PostsDiv, FriendsDiv } from '../../../style-feed/Nav/layout'
import logo from "../../../assets/images/logo.png";
import postsLogo from "../../../assets/images/posts_logo.png";
import friends from "../../../assets/svgs/icon-friends.svg";
import notification from "../../../assets/svgs/notification_bell.svg";
import user from "../../../assets/images/users/jennifer.png";
import menu from "../../../assets/svgs/menu.svg";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const NavBar = () => {
    const userId = useSelector(state => state.id);

    return (
        <NavBarContainer>
            <LeftNavBarDiv>
                <LogoDiv>
                    <img src={logo} alt='Motion Logo' />
                    <h1>Motion</h1>
                </LogoDiv>
                <Link className="no-line" to={ `/feed/${userId}/` } >
                    <PostsDiv>
                        <img src={postsLogo} alt='Posts Icon' /> 
                        <span>Posts</span>
                    </PostsDiv>
                </Link>
                <Link className="no-line" to={ `/feed/${userId}/find-friends/` } >
                    <FriendsDiv>
                        <img src={friends} alt='Find Friends Icon' />    
                        <span>Find Friends</span>
                    </FriendsDiv>
                </Link>
            </LeftNavBarDiv>
            <RightNavBarDiv>
                <img src={notification} alt='Notification Icon' />
                <Link to={ `/feed/${userId}/profile/` } >
                    <img src={user} alt='User Profile Picture' />
                </Link>
                <img src={menu} alt='Menu Icon' />
            </RightNavBarDiv>
        </NavBarContainer>
    )
}