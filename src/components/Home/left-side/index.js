import React from 'react';
import styled from 'styled-components';
import {Logo} from './logo';
import {Download} from './download';
import {SocialMedia} from './social-media';
import { LeftSideContainer } from '../../../style/layout'

export const LeftSideHome = () => {
    return (
        <LeftSideContainer>
            <Logo />
            <Download />
            <SocialMedia />
        </LeftSideContainer>
    )
}

// var imgUrl_1 = '/images/about/parallax.jpg';
//     const style_1 = {
//             padding: '250px 0', 
//             backgroundImage: 'url('+imgUrl_1+')',