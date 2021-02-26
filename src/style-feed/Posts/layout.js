import styled from 'styled-components';

//feed container
export const FeedComtainer = styled.section`
    position: relative;
`

// pop-up!!!
export const PopUpContainer = styled.div`
    width: 100vw;
    height: 100%;
    z-index: 2;
    background-color: black;
    opacity: 0.8;
    position: absolute;

`

export const PopUp = styled.div`
    height: 300px;
    width: 300px;
    margin-left: 70px;
    background-color: white;
    opacity: none;
    position: relative;
    article {
        position: absolute;
        right: 0;
        margin-right: 20px;
        height: 100%;
        width: 210px;
        p {
            height: 40%;
            word-break: break-all;
        }
        img {
            width: 70px;
            height: 70px;
        }
    }
`
export const PostImgContainer = styled.div`
    position: absolute;
    left: 0;
    height: 100%;
    width: 25%;
    img {
        margin-top: 15px;
        margin-left: 15px;
    }
`
export const PostSendContainer = styled.div`
    width: 100%;
    height: 60px;
    border-top: 2px solid rgb(168, 164, 164);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
`
export const PostSendContainerDiv = styled.div`
    margin-left: 10px;
`

//Delete Post Pop-up
export const DeletePopUpContainer = styled.div`
    width: 500px;
    height: 400px;
    background: white;
    margin-left: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
` 

//Menu Pop-up
export const MenuPopUpContainer = styled.div`
    width: 80px;
    height: 80px;
    background-color: white;
    position: absolute;
    z-index: 5;
    right: 20px;
    top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    button {
        width: 100%;
        height: 2rem;
    }
`

//Feed
export const BigPostsBodyContainer = styled.div`
    background-color: #EBE7E7;
    min-height: 80vh;
    display: flex;
    justify-content: center;
`

export const SmallPostsBodyContainer = styled.div`
    width: 75%;
    padding: 10px;
    column-count: 2;
    column-gap: 1em;
`

//Posts status update
export const PostStatusContainer = styled.div`

    height: 5rem;
    margin: 1.5em; 
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 5px 5px 5px lightgray, -5px -5px 5px lightgray;
    input {
        width: 50%;
        height: 30%;
        border: none;
    }
`

//Single post

export const PostDiv = styled.div`

    margin: 1.5em;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 5px 5px 5px lightgray, -5px -5px 5px lightgray;
    break-inside: avoid;
    page-break-inside: avoid;
    -webkit-column-break-inside: avoid;
`

//Single post -Top
export const TopPartPost = styled.div`
    width: 100%;
    max-height: 80px;
    display: flex;
    align-items: center;
`

export const UserTimeWrapper = styled.div`
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const NameDiv = styled.div`
    height: 1rem;
    font-weight: bold;
`

export const TimeDiv = styled.div`
    font-weight: normal;
    color: gray;
`

//Single post -Content
export const ContentPart = styled.div`
    width: 100%;
    min-height: 4rem;
    p {
        margin: 0.5rem 1.5rem;
    }
`
//Sing post -Images
export const ImagePart = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 90%;
    img {
        max-width: 40%;
        margin: 5px;
    }
`

//Single post -Like and Share 
export const LikeSharePart = styled.div`
    width: 90%;
    height: 40px;
    display: flex;
    justify-content: space-between;
`
export const SubLikeShare = styled(LikeSharePart)`
    width: 50%;
    div {
        display: flex;
        align-items: center;
        button {
            background-color: white;
            border: none;
        }
    }
`

export const LikesAmountP = styled.p`
    white-space: nowrap;
`

