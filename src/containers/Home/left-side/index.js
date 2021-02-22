import React from 'react';
import styled from 'styled-components';
import {Logo} from '../../../components/left-side/logo';
import {Download} from '../../../components/left-side/download';
import {SocialMedia} from '../../../components/left-side/social-media';
import backgroundImg from '../../../assets/images/background_image.png';

const LeftSideHomeContainer = styled.div`
    background-image: `url(${backgroundImg})`;
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