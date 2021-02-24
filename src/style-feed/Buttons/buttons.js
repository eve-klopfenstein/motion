import styled from 'styled-components';

export const UpperRightButtons = styled.button`
    background-color: rgb(235, 231, 231);
    border: none;
    font-size: 1.5rem;
    width: 100px;
    border-bottom: ${props => props.primary ? "3px solid black" : "none" };
    height: ${props => props.primary ? "10vh" : "auto" };
    padding-top: ${props => props.primary ? "6px" : "auto" };
    color: ${props => props.primary ? "black" : "gray"};
    :hover {
        cursor: pointer;
    }
`
export const ClickedUpperRightButtons = styled.button`
    background-color: rgb(235, 231, 231);
    border: none;
    border-bottom: 3px solid black;
    font-size: 1.5rem;
    width: 100px;
    height: 10vh;
    padding-top: 6px;
`