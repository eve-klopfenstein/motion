import styled from 'styled-components';

export const MainContainer = styled.div`
    background-color: #EBE7E7;
    height: 4000vh;
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
   //npm  border: 3px solid red;
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
    width: 6rem;
    height: 1.5rem;
    color: white;
    font-size:9px;
      :hover {
        cursor: pointer;
    }
`

export const TransparentButton = styled.button`
    background-color: transparent;
    height: 1.5rem;
    width: 6rem;
    border: 1px solid black;
    border-radius: 10rem;
    font-size:9px;
    :hover {
        cursor: pointer;
    }
`;

export const ThingsUserLikesDiv = styled.div`
    background-color: #EBE7E7;
    height: 1rem;
    width: 4rem;
    border-radius: 10rem;
    font-size: 10px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const NameUser = styled.div`
    font-weight:bold
`;

export const CityUser = styled.div`
    font-size:10px;
    width:80%;
    
    display:flex;
    justify-content:center;
    flex-direction:column;
    text-align:center;
    line-height: 1.5em;
`;

