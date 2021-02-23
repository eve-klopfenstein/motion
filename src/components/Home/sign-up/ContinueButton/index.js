import { BigButton, ThreeDotsContainer, SmallDotTransparent, SmallDotBlack } from "../../../../style/buttons.js";
import styled from 'styled-components';

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContinueButton = () => {
    return (
        <ButtonDiv>
          <BigButton type="submit">continue</BigButton>
          <ThreeDotsContainer>
            <SmallDotBlack />
            <SmallDotTransparent />
            <SmallDotTransparent />
          </ThreeDotsContainer>
        </ButtonDiv>
    )
}

export default ContinueButton;