import React from "react";
import './login-signup.css';
import user_icon from '/src/Assets/person.png';
import email_icon from '/src/Assets/email.png';
import password_icon from '/src/Assets/password.png';
const LoginSignup = () =>
{
    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="text">Sign-up</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text"/>
                    </div>
                     <div className="input">
                        <img src={email_icon

                        } alt="" />
                        <input type="email"/>
                    </div>
                     <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password"/>
</div>
                </div>
            </div>
            <div className="submit-container">
                
            </div>
        </div>
    )
}
 
export default LoginSignup;