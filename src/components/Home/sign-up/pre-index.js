import React, { useState } from 'react';
import { connect } from 'react-redux';
import './style.css';

const SignUp = (props) => {
    const [email, setEmail] = useState('');
    
        const continueHandler = (event) => {
        event.preventDefault();
            }
    }

 render() {  
    return (
        <>  
                <div>
                    <p>Already have an account?</p>
                    <button type="button" onClick={signIn} >SIGN IN</button>
                </div>

            <form className="sign-up" >
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
}

export default connect(mapStateToProps)(SignUp);
