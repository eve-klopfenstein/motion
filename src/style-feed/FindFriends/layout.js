import styled from 'styled-components';

export const MainContainer = styled.div`
    background-color: #EBE7E7;
    height: 2000vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    `

export const FriendsContainer = styled.div`
    background-color: #EBE7E7;
    height: 90vh;
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: center;
    // border: 3px solid red;
`

export const CardContainer = styled.div`
    width: 250px;
    height: 300px;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    background-color: white;
    margin: 20px;
   // border: 3px solid red;
`

export const CardImg = styled.img`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    background-color: #EBE7E7;
`

export const FollowingButton = styled.button`
     background-image: linear-gradient(115deg, #c568ff 0%, #6e91f6);
    border: none;
    border-radius: 10rem;
    width: 5rem;
    height: 2rem;
    color: white;
      :hover {
        cursor: pointer;
    }
`

export const TransparentButton = styled.button`
    background-color: transparent;
    height: 2rem;
    width: 5rem;
    border: 1px solid black;
    border-radius: 10rem;
    
    :hover {
        cursor: pointer;
    }
`;

export const ThingsUserLikesButton = styled.div`
    background-color: #EBE7E7;
    height: 2rem;
    width: 5rem;
    border: 1px solid black;
    border-radius: 10rem;
`;