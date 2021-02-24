import styled from 'styled-components';

export const BigPostsBodyContainer = styled.div`
    background-color: #EBE7E7;
    min-height: 80vh;
    display: flex;
    justify-content: center;
`

export const SmallPostsBodyContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

//Posts status update
export const PostStatusContainer = styled.div`
    width: 45%;
    margin: 10px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    input {
        width: 50%;
        height: 30%;
        border: none;
    }
`

//Single post
export const PostDiv = styled.div`
    width: 45%;
    height: auto;
    margin: 10px;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
`

export const TopPartPost = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    img {

    }
`
export const ContentPart = styled.div`
    width: 100%;
`

export const ImagePart = styled.div`
    width: 80%;
    img {
        width: 200px;
    }
`

export const LikeSharePart = styled.div`
    width: 100%;
    display: flex;
`