import { NavBarContainer, LeftNavBarDiv, RightNavBarDiv, LogoDiv, PostsDiv, FriendsDiv } from '../../../style-feed/layout'
import logo from "../../../assets/images/logo.png";
import postsLogo from "../../../assets/images/posts_logo.png";
import friends from "../../../assets/svgs/icon-friends.svg";
import notification from "../../../assets/svgs/notification_bell.svg";
import user from "../../../assets/images/users/jennifer.png";
import menu from "../../../assets/svgs/menu.svg";

export const NavBar = () => {

    return (
        <NavBarContainer>
            <LeftNavBarDiv>
                <LogoDiv>
                    <img src={logo} alt='Motion Logo' />
                    <h1>Motion</h1>
                </LogoDiv>
                <PostsDiv>
                    <img src={postsLogo} alt='Posts Icon' /> 
                    <span>Posts</span>
                </PostsDiv>   
                <FriendsDiv>
                    <img src={friends} alt='Find Friends Icon' />
                    <span>Find Friends</span>
                </FriendsDiv> 
            </LeftNavBarDiv>
            <RightNavBarDiv>
                <img src={notification} alt='Notification Icon' />
                <img src={user} alt='User Profile Picture' />
                <img src={menu} alt='Menu Icon' />
            </RightNavBarDiv>
        </NavBarContainer>
    )
}