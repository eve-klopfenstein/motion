import { UpperSection, UpperSectionLabel, UpperSectionDiv } from '../../../../style/layout.js';
import { TransparentButton } from '../../../../style/buttons.js';
import { Link } from 'react-router-dom';

const SignInLink = () => {
    return (
    <UpperSection>
      <UpperSectionDiv>
        <UpperSectionLabel htmlFor="sign-in-button">Already have an account?</UpperSectionLabel>
        <Link to="/" >
          <TransparentButton type="button" id="sign-in-button" >sign in</TransparentButton>
        </Link>
      </UpperSectionDiv>
    </UpperSection>
    )
}

export default SignInLink;
