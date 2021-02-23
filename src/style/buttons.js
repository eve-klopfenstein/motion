import styled from "styled-components";

export const TransparentButton = styled.button`
    background-color: transparent;
    height: 2.5rem;
    width: 7rem;
    border: 1px solid black;
    border-radius: 10rem;
    font-size: 0.9rem;
    :hover {
        cursor: pointer;
    }
`;

export const DownloadButton = styled(TransparentButton)`
    border: 1px solid white;   
    :hover {
        background: purple;
        border: none;
    }
`;

export const MiniButton = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    opacity: 70%;
    :hover {
        opacity: 100%;
    }
`;

export const BigButton = styled.button`
    background-image: linear-gradient(115deg, #c568ff 0%, #6e91f6);
    border: none;
    border-radius: 10rem;
    width: 18rem;
    height: 4rem;
    color: white;
    margin-top: 150px;
    :hover {
        cursor: pointer;
    }
`
