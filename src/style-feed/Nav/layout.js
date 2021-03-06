import styled from 'styled-components';

//Navigation Bar (Top)
export const NavBarContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
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
    color: black;
    :hover{
        border-bottom: 2px solid #c568ff;
    }
    img {
        margin-right: 7px;
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

//Search Bar
export const SearchBarContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(235, 231, 231);
    border-bottom: 3px solid rgba(49, 49, 49, 0.479);
`
export const LeftSearchDiv = styled.div`
    margin-left: 8%;
`
export const RightSearchDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 8%;
`