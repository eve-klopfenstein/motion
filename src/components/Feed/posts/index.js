import { BigPostsBodyContainer, SmallPostsBodyContainer } from '../../../style-feed/Posts/layout'
import PostStatus from './post-status/index.js'
import { useSelector } from 'react'

const PostsBody = () => {

    const token = useSelector( state => state.token );
    const url = 'https://motion.propulsion-home.ch/backend/api/social/posts/';

    const headers = new Headers({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    })

    const config = {
        method: 'GET',
        headers: headers
    }

    fetch(url)
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