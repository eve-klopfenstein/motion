import logo from '../../../../assets/images/logo_white.png'
import styled from 'styled-components';

const LogoContainer = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;

export const Logo = () => {
    return (
        <LogoContainer>
            <img src={logo} alt='Motion Logo'/>
            <h1>Motion</h1>
            <p>Connect with friends and the world</p> 
            <p>around you with Motion.</p>
        </LogoContainer>
    )
}