import React, { useState } from 'react';
import { connect } from 'react-redux';
import './style.css';

const SignUp = (props) => {
    const [email, setEmail] = useState('');
    
        const continueHandler = (event) => {
        event.preventDefault();
            }
    }

   
    return (
        <>  
            <form className="sign-up" >
                <div>
                    <p>Already have an account?</p>
                    <button type="button" onClick={signIn} >Continue</button>
                </div>
                             
                 <div className="form-tab">
                    <h2>Sign Up</h2>
                     <input type="email" placeholder="E-mail" value={email} onChange={ event => setEmail(event.target.value) } />
                 </div>                 
                    
                <div className="btn-container" >
                    <button type="button" onClick={continueHandler} >Continue</button>
                </div>              
            </form>
        </>
    )
}

const mapStateToProps = ({ userLoginReducer: { authenticated } }) => {
    return {
        authenticated: authenticated
    };
}

export default connect(mapStateToProps)(SignUp);
