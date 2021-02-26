
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

export const sendPostFunc = (newPost, image) => {
    const formData = new FormData();
    console.log(newPost);
    formData.append('content', image);
    formData.append('image', newPost);

    const token = localStorage.getItem('token');
    const url = "https://motion.propulsion-home.ch/backend/api/social/posts/";
    const method = 'POST';

    const headers = new Headers({
      'Authorization': `Bearer ${token}`
    });
    const config = {
        method: method,
        headers: headers,
        body: formData 
    };

    fetch(url, config)
    .then(res => res)
    .then(data => {
        console.log(data);
    })
  }

export const getSelfPosts = () => {
    return async ( dispatch, getState ) => {

    const token = getState().token || localStorage.getItem('token');

    const url = 'https://motion.propulsion-home.ch/backend/api/social/posts/me/';
    
    const config = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
    }
    const response = await fetch(url, config);
    const posts = await response.json();
    return posts
    }
}

export const getProfile = () => {
    return async ( dispatch, getState ) => {

    const token = getState().token || localStorage.getItem('token');

    const url = 'https://motion.propulsion-home.ch/backend/api/users/me/';
    
    const config = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
    }
    const response = await fetch(url, config);
    const posts = await response.json();
    return posts
    }
}