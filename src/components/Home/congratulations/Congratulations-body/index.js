import { H1, RightSide, MiddleSection, CongratulationsIcon, UpperSection } from "../../../../style/layout";
import { useSelector } from 'react-redux';
import { BigButton, ThreeDotsContainer, SmallDotTransparent, SmallDotBlack } from '../../../../style/buttons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NewButton = styled(BigButton)`
    margin-top: 100px;
`

const EmailP = styled.p`
    margin-top: 0;
`;

const CongratulationsBody = () => {

    const email = useSelector( state => state.email );

    return (
        <RightSide>
            <MiddleSection>
                <H1>Congratulations</H1>
                <CongratulationsIcon />
                <p>We've sent a confirmation code to your mail</p>
                <EmailP>{email}</EmailP>
                <NewButton>continue</NewButton>
                <ThreeDotsContainer>
                    <Link to='/sign-up/email'>
                        <SmallDotTransparent />
                    </Link>
                    <SmallDotBlack />
                    <SmallDotTransparent />
                </ThreeDotsContainer>
            </MiddleSection>
        </RightSide>
    )
}

export default CongratulationsBody;