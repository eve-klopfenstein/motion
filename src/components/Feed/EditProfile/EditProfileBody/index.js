import { ProfileBodyMain, EditProfileLeft, EditProfileRight } from '../../../../style-feed/Profile/layout.js';
import { TransparentButton } from '../../../../style/buttons.js';
import someoneImg from '../../../../assets/images/users/jennifer.png';
import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import { withRouter } from "react-router-dom";

const NewProfileBodyMain = styled(ProfileBodyMain)`
    background-color: white;
    display: flex;
`

const EditProfileBody = (props) => {
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [location, setLocation] = useState('');
    const [about_me, setAbout_me] = useState('');
    const [things_user_likes, setThings_user_likes] = useState(['']);

    let selectInputImg = useRef('');

    const deletAccount = () => {
        const token = localStorage.getItem('token');
        const url = "https://motion.propulsion-home.ch/backend/api/users/me/";
        const method = 'DELETE';

        const headers = new Headers({
            'Authorization': `Bearer ${token}`
        });
        const config = {
            method: method,
            headers: headers
        };
        fetch(url, config)
        .then(res => res.json())
        .then(data => {
            props.history.push('/');
            console.log(data)
        });
    }

    const fileImgClick = (e) => {
        selectInputImg.click();
    }
    
    const imageInput = (e) => {
        setAvatar(e.target.files[0]);
    }

    const editAccount = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const url = "https://motion.propulsion-home.ch/backend/api/users/me/";
        const method = 'PATCH';

        const headers = new Headers({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        });
        const body = {
            email: email,
            first_name: first_name,
            last_name: last_name,
            username: username,
            location: location,
            about_me: about_me,
            things_user_likes: things_user_likes,
            avatar: avatar
        };
        const config = {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
        };
        fetch(url, config)
        .then(res => res.json())
        .then(data => {
        console.log(data)
        });
    }

    return (
        <NewProfileBodyMain>
            <EditProfileLeft>
                <img src={ someoneImg } />
                <input onChange={ imageInput } type="file" ref={input => selectInputImg = input} accept="image/png, image/jpeg" hidden="hidden" />
                <TransparentButton onClick={ fileImgClick } >UPDATE IMAGE</TransparentButton>
                
                <TransparentButton onClick={ deletAccount } >DELETE ACCOUNT</TransparentButton>
                <form onSubmit={ editAccount } >
                    <TransparentButton type="submit" >SAVE</TransparentButton>
                </form>
            </EditProfileLeft>
            <EditProfileRight>
                <div>
                    <label htmlFor="first-name" >First name</label>
                    <input value={ first_name } onChange={ event => setFirstName(event.target.value) } id="first-name" type="text" />
                </div>
                <div>
                    <label htmlFor="last-name" >Last name</label>
                    <input value={ last_name } onChange={ event => setLastName(event.target.value) } id="last-name" type="text" />
                </div>
                <div>
                    <label htmlFor="email-input" >Email</label>
                    <input value={ email } onChange={ event => setEmail(event.target.value) } id="email-input" type="email" required/>
                </div>
                <div>
                    <label htmlFor="user-name" >Username</label>
                    <input value={ username } onChange={ event => setUserName(event.target.value) } id="user-name" type="text" required/>
                </div>
                <div>
                    <label htmlFor="location-input" >Location</label>
                    <input value={ location } onChange={ event => setLocation(event.target.value) } id="location-input" type="text" />
                </div>
                <div>
                    <label htmlFor="about-input" >About</label>
                    <input value={ about_me } onChange={ event => setAbout_me(event.target.value) } id="about-input" type="text" />
                </div>
                <div>
                    <label htmlFor="things-i-like" >Things I like</label>
                    <input value={ things_user_likes } onChange={ event => setThings_user_likes([event.target.value]) } id="things-i-like" type="text" required/>
                </div>
            </EditProfileRight>
        </NewProfileBodyMain>
    )
}

export default withRouter(EditProfileBody);