import jenniferImg from '../../../../assets/images/users/jennifer.png';
import sendIcon from '../../../../assets/images/send_button.png';
import { SendButton } from '../../../../style-feed/button';
import { PostStatusContainer } from '../../../../style-feed/Posts/layout';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';

const PostStatus = (props) => {
    const dispatch = useDispatch()
    const firstName = useSelector( state => state.first_name);
    const [post, setPost] = useState('');

    const addPost = () => {
        dispatch({type: 'NEW_POST', payload: post});
        props.setshowPopUp(!props.showPopUp);
    }
    return (
        <>
        <PostStatusContainer>
            <img src={jenniferImg} />
            <input value={post} onChange={ e => setPost(e.target.value) } placeholder={ firstName ? `What's on your mind, ${firstName}?` : "What's on your mind ?"} />
            <SendButton onClick={ addPost }>
                <img src={sendIcon} alt='Send Icon' />
            </SendButton>
        </PostStatusContainer>
        </>
    )
}

export default PostStatus;