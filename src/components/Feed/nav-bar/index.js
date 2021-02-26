import { NavBarContainer, LeftNavBarDiv, RightNavBarDiv, LogoDiv, PostsDiv, FriendsDiv } from '../../../style-feed/Nav/layout'
import { Avatar } from '../../../style-feed/avatar';
import logo from "../../../assets/images/logo.png";
import postsLogo from "../../../assets/images/posts_logo.png";
import friends from "../../../assets/svgs/icon-friends.svg";
import notification from "../../../assets/svgs/notification_bell.svg";
import tuna  from "../../../assets/images/tuna.jpg";
import menu from "../../../assets/svgs/menu.svg";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const NavBar = () => {
    const userId = useSelector(state => state.id);
    const avatar = useSelector( state => state.avatar );

    return (
        <NavBarContainer>
            <LeftNavBarDiv>
                <LogoDiv>
                    <img src={logo} alt='Motion Logo' />
                    <h1>Motion</h1>
                </LogoDiv>
                <Link class="no-line" to={ `/feed/${userId}/` } >
                    <PostsDiv>
                        <img src={postsLogo} alt='Posts Icon' /> 
                        <span>Posts</span>
                    </PostsDiv>
                </Link>
                <Link class="no-line" to={ `/feed/${userId}/find-friends/` } >
                    <FriendsDiv>
                        <img src={friends} alt='Find Friends Icon' />    
                        <span>Find Friends</span>
                    </FriendsDiv>
                </Link>
            </LeftNavBarDiv>
            <RightNavBarDiv>
                <img src={notification} alt='Notification Icon' />
                <Link to={ `/feed/${userId}/profile/` } >
                    <Avatar src={avatar ? avatar : tuna} alt='User Profile Picture' />
                </Link>
                <img src={menu} alt='Menu Icon' />
            </RightNavBarDiv>
        </NavBarContainer>
    )
}