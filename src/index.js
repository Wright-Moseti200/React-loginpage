/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";


const App = () =>
{
    let [value, setvalue] = useState(true);
    let condition1 = () =>
    {
        setvalue(true)
    }
    let condition2 = () =>
    {
        setvalue(false)
    }
    if (value)
    {
        return (
            <div className="box has-background-white">
            <br />
                <h1 className="title is-size-1">Login</h1>
<br />
                <br/>
                <div class="control has-icons-left">
                    <input placeholder="Email id" className=" input has-background-text is-medium is-shadowless" type="email"/>  
                    <span class="icon is-left">
                     <i class="fa-solid fa-envelope"></i>
                    </span>
                </div>
                <br />
                <br/>
                <div class="control has-icons-left">
                    <input placeholder="Password" className=" input has-background-text is-medium is-shadowless" type="password"/>  
                    <span class="icon is-left">
                    <i class="fa-solid fa-lock"></i>
                    </span>
                </div>
                <br />
                <p>lost password?<a href="#">click here</a></p>
                <br />
                <br />
                <div className="buttongroup">
                    <button className="button has-background-grey is-medium" onClick={condition2}>Sign Up</button>
                    <button className="button has-background-link is-medium" onClick={condition1}>Login</button>
                </div>
                </div>
        );
     }

    
    
    return (
        <div className="box has-background-white">
            <br />
            <h1 className="title is-size-1">Sign up</h1>
            <div className="field">
                <div class="control has-icons-left">
                    <input placeholder="Name" className=" input has-background-text is-medium is-shadowless" type="email"/>  
                    <span class="icon is-left">
                   <i class="fa-solid fa-user"></i>
                    </span>
                </div>
                <br />
                <br/>
                <div class="control has-icons-left">
                    <input placeholder="Email id" className=" input has-background-text is-medium is-shadowless" type="email"/>  
                    <span class="icon is-left">
                     <i class="fa-solid fa-envelope"></i>
                    </span>
                </div>
                <br />
                <br/>
                <div class="control has-icons-left">
                    <input placeholder="Password" className=" input has-background-text is-medium is-shadowless" type="password"/>  
                    <span class="icon is-left">
                    <i class="fa-solid fa-lock"></i>
                    </span>
                </div>
                <br />
                <br />
                <br />
                <div className="buttongroup">
                    <button className="button has-background-link is-medium" onClick={condition2}>Sign Up</button>
                    <button className="button has-background-grey is-medium" onClick={condition1}>Login</button>
                </div>
            </div>
      </div>
  )
 }

ReactDOM.render
    (
        <App />,
        document.querySelector("body")
    )
