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

