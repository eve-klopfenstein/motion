import { Link } from 'react-router-dom';
import { MenuPopUpContainer } from '../../../style-feed/Posts/layout';
import { PopupButtonHoverGray } from '../../../style-feed/button'
import { ProfileIcon, LogOutIcon } from '../../../style-feed/avatar';

export const MenuPopUp = () => {

    const logOut = () => {
        localStorage.removeItem('token');
    }

    return (
        <MenuPopUpContainer>
        <Link to='/feed/:id/profile/'>
            <PopupButtonHoverGray>
                <ProfileIcon />
                <span>Profile</span>
            </PopupButtonHoverGray>
        </Link>
        <Link to='/'>
            <PopupButtonHoverGray onClick={logOut}>
                <LogOutIcon />
                <span>Logout</span>
            </PopupButtonHoverGray>
        </Link>
        </MenuPopUpContainer>
    )
}