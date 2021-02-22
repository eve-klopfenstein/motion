import React from 'react';
import styled from 'styled-components';
import {Logo} from './logo';
import {Download} from './download';
import {SocialMedia} from './social-media';
import backgroundImg from '../../../assets/images/background_image.png';

const LeftSideHomeContainer = styled.div`
    width: 40%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-image: url(${backgroundImg}), linear-gradient(115deg, #c568ff 0%, #6e91f6);
    background-repeat: no-repeat;
    background-size: cover;
`;

export const LeftSideHome = () => {
    return (
        <LeftSideHomeContainer>
            <Logo />
            <Download />
            <SocialMedia />
        </LeftSideHomeContainer>
    )
}

// var imgUrl_1 = '/images/about/parallax.jpg';
//     const style_1 = {
//             padding: '250px 0', 
//             backgroundImage: 'url('+imgUrl_1+')',