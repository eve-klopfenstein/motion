import { BigPostsBodyContainer, SmallPostsBodyContainer } from '../../../style-feed/Posts/layout'
import PostStatus from './post-status/index.js'

const PostsBody = () => {

    const url = 'https://motion.propulsion-home.ch/backend/api/social/posts/';

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
                <PostStatus />
                <PostStatus />
                <PostStatus />
            </SmallPostsBodyContainer>
        </BigPostsBodyContainer>
    )

}

export default PostsBody