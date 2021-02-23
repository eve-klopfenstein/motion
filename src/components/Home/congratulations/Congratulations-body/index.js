import { H1, RightSide, MiddleSection, CongratulationsIcon } from "../../../../style/layout";
import { useSelector } from 'react-redux';
import { BigButton } from '../../../../style/buttons';

const CongratulationsBody = () => {

    const email = useSelector( state => state.email )

    return (
        <RightSide>
            <MiddleSection>
                <H1>Congratulations</H1>
                <CongratulationsIcon />
                <p>We've sent a confirmation code to your mail</p>
                <p>{email}</p>
                <BigButton>Continue</BigButton>
            </MiddleSection>
        </RightSide>
    )
}

export default CongratulationsBody;