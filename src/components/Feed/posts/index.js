import { BigPostsBodyContainer, SmallPostsBodyContainer } from '../../../style-feed/Posts/layout'
import PostStatus from './post-status/index.js';
import { useSelector } from 'react-redux';

const PostsBody = () => {

    const token = useSelector( state => state.token );
    console.log(token);
    const url = 'https://motion.propulsion-home.ch/backend/api/social/posts/';

    const config = {
        method: 'GET',
        headers: new Headers({
            'Authorization': `Bearer ${token}`,
        })
    }

    fetch(url, config)
        .then( res => res.json() )
        .then( data => {
            console.log(data)
    })

    return (
        <BigPostsBodyContainer>
            <SmallPostsBodyContainer>
                <PostStatus />
                <PostStatus />
                <PostStatus />

            </SmallPostsBodyContainer>
        </BigPostsBodyContainer>
    )
}

export default PostsBody