import { ProfilePostsContainer } from '../../../../../style-feed/Profile/layout.js';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSelfPosts } from '../../../../../store/actions/getAllPosts.js';

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
            {posts.map((post, index) => {
                return <h2 key={index}>{post.content}hello</h2>
            })}
        </ProfilePostsContainer>
    )
}

export default ProfilePosts;