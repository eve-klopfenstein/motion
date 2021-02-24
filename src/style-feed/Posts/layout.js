import styled from 'styled-components';

//feed container
export const FeedComtainer = styled.section`
    position: relative;
`

// pop-up!!!
export const PopUpContainer = styled.div`
    width: 100vw;
    height: 100vh;
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

