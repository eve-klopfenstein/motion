
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

export const sendPostFunc = (newPost) => {
    const token = localStorage.getItem('token');
    const url = "https://motion.propulsion-home.ch/backend/api/social/posts/";
    const method = 'POST';
    const body = {
        content: newPost
    };
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const config = {
        method: method,
        headers: headers,
        body: JSON.stringify(body)
    };
    fetch(url, config)
    .then(res => res)
    .then(data => console.log(data))
  }