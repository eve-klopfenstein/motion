import jenniferImg from '../../../../assets/images/users/jennifer.png';
import sendIcon from '../../../../assets/images/send_button.png';
import { SendButton } from '../../../../style-feed/button';
import { PostStatusContainer } from '../../../../style-feed/Posts/layout';
import { Avatar } from '../../../../style-feed/avatar'
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import tuna from '../../../../assets/images/tuna.jpg'

const PostStatus = (props) => {
    const dispatch = useDispatch()
    const firstName = useSelector( state => state.first_name);
    const avatar = useSelector( state => state.avatar );
    const [post, setPost] = useState('');

    const addPost = () => {
        dispatch({type: 'NEW_POST', payload: post});
        props.setshowPopUp(!props.showPopUp);
    }

    return (
        <>
            <PostStatusContainer>
                <Avatar src={ avatar ? avatar : tuna } />
                <input value={post} onChange={ e => setPost(e.target.value) } placeholder={ firstName ? `What's on your mind, ${firstName}?` : "What's on your mind ?"} />
                <SendButton onClick={ addPost }>
                    <img src={sendIcon} alt='Send Icon' />
                </SendButton>
            </PostStatusContainer>
        </>
    )
}

export default PostStatus;