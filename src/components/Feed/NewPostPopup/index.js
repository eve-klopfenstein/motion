import { PopUp, PostSendContainer, PostSendContainerDiv, PostImgContainer } from '../../../style-feed/Posts/layout.js';
import { SendButton, PopupButton } from '../../../style-feed/button.js';
import { AvatarNewPost } from '../../../style-feed/avatar'
import { useSelector, useDispatch } from 'react-redux';
import sendIcon from '../../../assets/images/send_button.png';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import { sendPostFunc } from '../../../store/actions/getAllPosts.js';
import tuna from '../../../assets/images/tuna.jpg'

const NewSendButton = styled(SendButton)`
    margin-right: 15px;
`

const NewPostPopup = (props) => {
    const dispatch = useDispatch();
    const [image, setImage] = useState('');
    const newPost = useSelector( state => state.newPost);
    let selectInput = useRef(''); 
    let selectInputImg = useRef('');
    const avatar = useSelector( state => state.avatar );

    const fileClick = () => {
        selectInput.click();
    }

    const fileImgClick = (e) => {
        selectInputImg.click();
    }

    const imageInput = (e) => {
        setImage(e.target.files[0]);
    }
    
    const sendPost = () => {
      const newImage = image;
      sendPostFunc(newPost, newImage);
      props.setshowPopUp(false);
      dispatch({type: 'NEW_POST', payload: ''});
    }

    return (
      <PopUp>
        <PostImgContainer>
            <AvatarNewPost src={ avatar ? avatar : tuna } />
        </PostImgContainer>
        <article>
            <p>{ newPost }</p>
            {image ? <img src={ (window.URL || window.webkitURL).createObjectURL(image) } /> : null}
        </article>
        <PostSendContainer>
          <PostSendContainerDiv>
            <input onChange={ imageInput }  type="file" ref={input => selectInput = input} hidden="hidden" />
            <input onChange={ imageInput } type="file" ref={input => selectInputImg = input} accept="image/png, image/jpeg" hidden="hidden" />
            <PopupButton onClick={ fileImgClick }><i className="fas fa-image" /></PopupButton>
            <PopupButton onClick={ fileClick } ><i className="fas fa-link" /></PopupButton>
          </PostSendContainerDiv>
          <NewSendButton onClick={ sendPost } >
            <img src={sendIcon} alt='Send Icon' />
          </NewSendButton>
        </PostSendContainer>
      </PopUp>
    )
}

export default NewPostPopup;