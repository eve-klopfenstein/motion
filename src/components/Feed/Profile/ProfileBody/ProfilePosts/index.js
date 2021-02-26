import { ProfilePostsContainer } from '../../../../../style-feed/Profile/layout.js';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSelfPosts } from '../../../../../store/actions/getAllPosts.js';
import SinglePost from './SinglePost';

const ProfilePosts = () => {
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();

    useEffect( () => {
        const getPostsFunc = async () => {
            const allPosts = await dispatch( getSelfPosts());
            setPosts(allPosts);
        }
        getPostsFunc();
    }, [])

    return (
        <ProfilePostsContainer>
             { posts.map( (post, index) => 
                    <SinglePost
                    key={index}
                    number={post.user.id} 
                    name={`${post.user.first_name} ${post.user.last_name}`} 
                    content={post.content} 
                    likes={post.amount_of_likes} 
                    time={post.created} 
                    images={post.images} 
                    avatar= {post.user.avatar}
                    postID={post.id}
                    /> 
                )}
        </ProfilePostsContainer>
    )
}

export default ProfilePosts;