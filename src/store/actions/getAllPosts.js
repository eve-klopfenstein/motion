
export const getAllPosts = () => {
    return async ( dispatch, getState ) => {

    const token = getState().token || localStorage.getItem('token');
    // console.log(token);
    const url = 'https://motion.propulsion-home.ch/backend/api/social/posts/';
    
    const config = {
        method: 'GET',
        headers: new Headers({
            'Authorization': `Bearer ${token}`,
        })
    }
    const response = await fetch(url, config)
    const posts = await response.json()
    return posts
    }
}