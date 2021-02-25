import styled from 'styled-components';

export const ProfilePageContainer = styled.div`
    position: relative;
    height: 100vh;
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
    height: 200px;
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
    spam {
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
        color: gray;
    }
`
export const ProfilePostsContainer = styled.section`
    background-color: white;
    margin-top: 20px;
    height: 1000px;
`