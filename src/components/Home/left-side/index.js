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

export default LeftSideHome;