import styled from 'styled-components';

// Profile page
export const ProfilePageContainer = styled.div`
    position: relative;
    height: 100vh;
    overflow-y: scroll;
    width: 100vw;
    background-color: rgb(235, 231, 231);
`
export const ProfileBodyMain = styled.section`
    z-index: 2;
    position: absolute;
    top: 20vh;
    left: 15vw;
    height: 500px;
    width: 70vw;
    background-color: rgb(235, 231, 231);
`
export const ProfileDetailsContainer = styled.section`
    background-color: white;
    height: 250px;
    display: flex;
`
export const ProfileDetailsLeft = styled.article`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 3px solid rgb(235, 231, 231);
    img {
        height: 60px;
        width: 60px;
        margin-top: 20px;
    }
    p {
        font-size: 1.2rem;
        margin-bottom: 3px;
        margin-top: 10px;
    }
    span {
        font-size: 0.7rem;
        padding: 0;
    }
    button {
        font-size: 0.7rem;
        height: 2rem;
        margin-top: 15px;
    }
`

export const ProfileDetailsRight = styled.article`
    width: 80%;
    height: 100%;
`
export const UpperRightDiv = styled.div`
    height: 70%;
    width: 100%;
    border-bottom: 3px solid rgb(235, 231, 231);
    display: flex;
`
export const UpperRightLeft = styled.div`
   width: 50%;
   height: 100%;
   div {
       width: 100%;
       height: 50%;
       h2 {
           font-size: 1rem;
           margin-left: 15px;
           margin-bottom: 5px;
       }
       p {
           margin-top: 0;
           margin-left: 15px;
       }
    }
    section {
        display: flex;
    }
`
export const UpperRightRight = styled.div`
    width: 50%;
    height: 100%;
    h2 {
        font-size: 1rem;
    }
`
export const LowerRightDiv = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    div {
        height: 100%;
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        span {
            margin-top: 8px;
            font-size: 1.5rem;
        }
        p {
            color: gray;
            margin-top: 0;
        }
    }
`
export const ProfilePostsContainer = styled.section`
    background-color: rgb(235, 231, 231);
    margin-top: 20px;
    height: 1000px;
`

// Edit profile page
export const EditProfileLeft = styled.section`
    height: 100%;
    width: 25%;
    border-right: 3px solid rgb(235, 231, 231);
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        height: 60px;
        width: 60px;
        margin-top: 20px;
    }
    button {
        font-size: 0.7rem;
        margin-top: 30px;
    }
`
export const EditProfileRight = styled.section`
    height: 100%;
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    div:nth-of-type(1) {
        margin-top: 30px;
    }
    div:nth-of-type(2) {
        margin-top: 30px;
    }
    div:nth-of-type(7){
        input {
            width: 33rem;
        }
    }
    div {
        display: flex;
        flex-direction: column;
        margin-left: 5%;
        input {
            border: none;
            border-bottom: 1px solid gray;
            height: 2rem;
            width: 15rem;
        }
    }
`