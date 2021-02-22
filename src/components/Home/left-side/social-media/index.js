import twitter from '../../../../assets/svgs/twitter_icon.svg'
import facebook from '../../../../assets/svgs/facebook_icon.svg'
import instagram from '../../../../assets/svgs/instagram_icon.svg'
import styled from 'styled-components';
import { MiniButton } from '../../../../style/buttons'

const SocialMediaContainer = styled.div`
    height:15vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    div {
        width: 50%;
        display: flex;
        justify-content: space-between;
    }
`;

export const SocialMedia = () => {
    return (
        <SocialMediaContainer>
            <div>
                <a href='https://twitter.com/?lang=en' target='_blank'>
                    <MiniButton src={twitter} alt='Twitter Icon' />
                </a>
                <a href='https://facebook.com' target='_blank'>
                    <MiniButton src={facebook} alt='Facebook Icon' />
                </a>
                <a href='https://instagram.com' target='_blank'>
                    <MiniButton src={instagram} alt='Instagram Icon' />
                </a>
            </div>
            <p>Motion 2018. All rights reserved.</p>
        </SocialMediaContainer>
    )
}