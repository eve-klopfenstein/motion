import jenniferImg from '../../../../assets/images/users/jennifer.png';
import sendIcon from '../../../../assets/images/send_button.png';
import { SendButton } from '../../../../style-feed/button';
import { PostStatusContainer } from '../../../../style-feed/Posts/layout';
import { useSelector } from 'react-redux';

const PostStatus = () => {

    const firstName = useSelector( state => state.first_name) 

    return (
        <PostStatusContainer>
            <img src={jenniferImg} />
            <input placeholder={ firstName ? `What's on your mind, ${firstName}?` : "What's on your mind ?"} />
            <SendButton>
                <img src={sendIcon} alt='Send Icon' />
            </SendButton>
        </PostStatusContainer>
    )
}

export default PostStatus;