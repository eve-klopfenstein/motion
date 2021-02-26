import styled from 'styled-components';
import { Trash } from '@styled-icons/boxicons-solid/Trash';
import { UserRectangle } from '@styled-icons/boxicons-solid/UserRectangle';
import { LogOut } from '@styled-icons/boxicons-regular/LogOut';
import { Feed } from '@styled-icons/material/Feed';
export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    padding: 15px;
    border-radius: 50%;
`

export const AvatarNewPost = styled(Avatar)`
    padding: 0;
`

export const TrashIcon = styled(Trash)`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

export const ProfileIcon = styled(UserRectangle)`
    width: 20px;
    color: gray;
`

export const LogOutIcon = styled(LogOut)`
    width: 20px;
    color: gray;
`

export const FeedIcon = styled(Feed)`
    width: 23px;
    color: gray;
`