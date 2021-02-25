import { ProfilePostsContainer } from '../../../../../style-feed/Profile/layout.js';
import { useEffect } from 'react';


const ProfilePosts = () => {
    useEffect( () => {
        const getPostsFunc = (newPost) => {
            const token = localStorage.getItem('token');
            const url = "https://motion.propulsion-home.ch/backend/api/social/posts/me/";
            const method = 'GET';
            const headers = new Headers({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            });
            const config = {
                method: method,
                headers: headers
            };
            fetch(url, config)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
          }
        getPostsFunc();
    }, [])



    return (
        <ProfilePostsContainer>

        </ProfilePostsContainer>
    )
}

export default ProfilePosts;