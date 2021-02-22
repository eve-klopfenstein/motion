import styled from "styled-components";
import backgroundImg from '../assets/images/background_image.png';

//Overall Home
export const HomeContainer = styled.section`
    display: flex;
`;


//Right-side Home
export const RightSide = styled.section`
    width: 60vw;
`
export const UpperSection = styled.div`
    height: 15%;
    display: flex;
    justify-content: flex-end;
`
export const UpperSectionDiv = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%auto;
    width: 300px;
    margin-top: 10px;
`
export const UpperSectionLabel = styled.label`
    margin-top: 8px;
`
export const MiddleSection = styled.div`
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const H1 = styled.h1`
    font-size: 2rem;
    margin-top: 100px;
`

//Left-side Home

export const LeftSideContainer = styled.div`
    width: 40%;
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-image: url(${backgroundImg}), linear-gradient(115deg, #c568ff 0%, #6e91f6);
    background-repeat: no-repeat;
    background-size: cover;
`;

export const LogoContainer = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;

export const DownloadContainer = styled.div`
    min-height: 170px;
    height: 20vh;
    min-width: 315px;
    width: 30%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
`;

export const SocialMediaContainer = styled.div`
    height:15vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    div {
        width: 50%;
        display: flex;
        justify-content: space-between;
    }
`;