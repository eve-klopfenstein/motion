import { H1, RightSide, MiddleSection, CongratulationsIcon, UpperSection } from "../../../../style/layout";
import { useSelector } from 'react-redux';
import { BigButton,ThreeDotsContainer, SmallDotTransparent, SmallDotBlack } from '../../../../style/buttons';
import { Link } from 'react-router-dom';

const CongratulationsBody = () => {

    const email = useSelector( state => state.email )

    return (
        <RightSide>
            <MiddleSection>
                <H1>Congratulations</H1>
                <CongratulationsIcon />
                <p>We've sent a confirmation code to your mail</p>
                <p>{email}</p>
                {/* <Link to='/sign-up/verification'> */}
                    <BigButton>Continue</BigButton>
                {/* </Link> */}
                <ThreeDotsContainer>
                    <SmallDotTransparent />
                    <SmallDotBlack />
                    <SmallDotTransparent />
                </ThreeDotsContainer>
            </MiddleSection>
        </RightSide>
    )
}

export default CongratulationsBody;