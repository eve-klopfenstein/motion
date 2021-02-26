import styled from 'styled-components';

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
    border: 0.2px solid black;
    margin: 5px;
    margin-left: 20px;
    

`

export const FollowingButton = styled.button`
     background-image: linear-gradient(115deg, #c568ff 0%, #6e91f6);
    border: none;
    border-radius: 10rem;
    width: 5rem;
    height: 1.5rem;
    color: white;
    font-size:8px;
    display: flex;
    justify-content:center;
    align-items:center;
      :hover {
        cursor: pointer;
    }
`

export const TransparentButton = styled.button`
    background-color: transparent;
    height: 1.5rem;
    width: 5rem;
    border: 1px solid black;
    border-radius: 10rem;
    font-size:8px;
    display: flex;
    justify-content:center;
    align-items:center;
    :hover {
        cursor: pointer;
    }
`;

export const ThingsUserLikesDiv = styled.div`
    background-color: #EBE7E7;
    height: 1.5rem;
    width: 4rem;
    border-radius: 10rem;
    font-size: 10px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:6px;
    margin-right:2px;
    margin-left:2px;
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

export const InlineDiv= styled.div`
    display: flex;
    justify-content:space-around;
    width: 180px;
    margin-top: 10px;
    `;

export const SpaceDiv= styled.div`
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    align-items:center;
  
    width: 210px;
 `;

 export const NameAvatarDiv= styled.div`
    display: flex;
    justify-content:left;
    align-items:center;
    width: 200px;
 `;

 export const SplitDiv= styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    width: 300px;
 `;

 export const CardImgPending = styled.img`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    opacity: 0.2;
    margin: 5px;
    margin-left: 20px;
`
export const PendingDiv= styled.div`
    display: flex;
    justify-content:left;
    align-items:center;
    width: 50px;
 `;