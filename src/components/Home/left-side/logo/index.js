import logo from '../../../../assets/images/logo_white.png'
import styled from 'styled-components';
import { LogoContainer } from '../../../../style/layout'

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