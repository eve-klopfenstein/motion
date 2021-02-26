import { BigPostsBodyContainer, SmallPostsBodyContainer } from '../../../style-feed/Posts/layout'
import PostStatus from './post-status/index.js';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../../store/actions/getAllPosts.js';
import SinglePost from './single-post';


const PostsBody = (props) => {

    const [ posts, setPosts ] = useState([]);
    const [ content, setContent ] = useState('');
    const token = useSelector( state => state.token )

    const dispatch = useDispatch();

    useEffect( () => { 
        const getPosts = async () => {
            const allPosts = await dispatch( getAllPosts());
            console.log('All Posts', allPosts)
            setPosts(allPosts)
        }
        getPosts()
    }, []);

    const likeHandler = (e, content, postID) => {
        setContent(content)
        const url = `https://motion.propulsion-home.ch/backend/api/social/posts/toggle-like/${postID}/`
        const config = {
            method: 'POST',
            body: JSON.stringify(content),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }
        fetch(url, config)
            .then( res => {
                console.log(res)
                if ( res.status === 200 ) {
                    const getPosts = async () => {
                        const allPosts = await dispatch( getAllPosts());
                        console.log('All Posts', allPosts)
                        setPosts(allPosts)
                    }
                    getPosts()
                    
                }
            })
    }

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
                    onClick={(e) => likeHandler(e, post.content, post.id)}
                    likedByMe={post.logged_in_user_liked}
                    /> 
                )}
                
            </SmallPostsBodyContainer>
        </BigPostsBodyContainer>
    )
}

export default PostsBody