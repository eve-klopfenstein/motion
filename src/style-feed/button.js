import styled from 'styled-components';
import { SuitHeartFill } from '@styled-icons/bootstrap/SuitHeartFill';
import { StyledComponents } from 'styled-icons/simple-icons';
import { Share } from '@styled-icons/boxicons-solid/Share';

export const SendButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-image: linear-gradient(115deg, #c568ff 0%, #6e91f6);
    img {
        width: 16px;
        height: 16px;
    }
`
export const CloseButton = styled.button`
    margin-top: 100px;
    margin-left: 370px;
    color: white;
    background-color: transparent;
    border: none;
    font-size: 2rem;
`
export const PopupButton = styled.button`
    background-color: transparent;
    border: none;
`

export const LikeIcon = styled(SuitHeartFill)`
    width: 20px;
    color: lightgray;
    :hover {
        color: purple;
    }
`

export const LikeIconClicked = styled(LikeIcon)`
    color: purple;
`

export const ShareIcon = styled(Share)`
    width: 25px;
    color: lightgray;
    :hover {
        color: purple;
    }
`