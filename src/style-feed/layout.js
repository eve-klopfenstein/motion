import styled from 'styled-components';

//Navigation Bar (Top)
export const NavBarContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const LeftNavBarDiv = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
`

export const LogoDiv = styled.div`
    width: 30%;
    height: 60%;
    display: flex;
    white-space:nowrap;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const PostsDiv = styled(LogoDiv)`
    width: 15%;
    justify-content: space-around;
    padding-bottom: 10px;
    :hover{
        border-bottom: 2px solid #c568ff;
    }
`

export const FriendsDiv = styled(PostsDiv)`
    width: 25%;
`

export const RightNavBarDiv = styled(LeftNavBarDiv)`
    width: 15%;
    height: 60%;
    img {
        height: 55%;
    }
`
