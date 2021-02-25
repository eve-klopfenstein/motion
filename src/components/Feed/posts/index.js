import { BigPostsBodyContainer, SmallPostsBodyContainer } from '../../../style-feed/Posts/layout'
import PostStatus from './post-status/index.js';
// import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllPosts } from '../../../store/actions/getAllPosts.js';
import { SinglePost } from './single-post';


const PostsBody = (props) => {

    const [ posts, setPosts ] = useState([]);
    const dispatch = useDispatch();
    useEffect( () => { 
        const getPosts = async () => {
            const allPosts = await dispatch( getAllPosts());
            console.log('All Posts', allPosts)
            setPosts(allPosts)
        }
        getPosts()
    }, [])

    return (
        <BigPostsBodyContainer>
            <SmallPostsBodyContainer>
                <PostStatus showPopUp={ props.showPopUp } setshowPopUp={ props.setshowPopUp } />
                
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
                
            </SmallPostsBodyContainer>
        </BigPostsBodyContainer>
    )
}

export default PostsBody