import apple from '../../../../assets/svgs/apple.svg';
import googlePlay from '../../../../assets/svgs/google.svg';
import { TransparentButton } from '../../../../style/buttons'
import styled from 'styled-components';

const DownloadContainer = styled.div`
    min-height: 170px;
    height: 20vh;
    min-width: 315px;
    width: 30%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
`;

export const Download = () => {
    return (
        <DownloadContainer>
            <TransparentButton>
                <img src={apple} alt='apple logo' />
            </TransparentButton>
            <TransparentButton>
                <img src={googlePlay} alt='google play' />
            </TransparentButton>
        </DownloadContainer>
    )
}