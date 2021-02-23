import { NavBarContainer, LeftNavBarDiv, RightNavBarDiv } from '../../../style-feed/layout'
import logo from "../../../assets/images/logo.png";
export const NavBar = () => {

    return (
        <NavBarContainer>
            <LeftNavBarDiv>
                <div>
                    <img src={logo} alt='Motion Logo' />
                    <h1>Motion</h1>
                </div>
                <div>
                    <img alt='Posts Icon' /> 
                    <span>Posts</span>
                </div>   
                <div>
                    <img alt='Find Friends Icon' />
                    <span>Find Friends</span>
                </div> 
            </LeftNavBarDiv>
            <RightNavBarDiv>

            </RightNavBarDiv>
        </NavBarContainer>
    )
}