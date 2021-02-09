import React, { useState } from 'react';
import "./login.css"

import NavBar from './NavBar';

import{useHistory} from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
export default function Login()
{
    const history=useHistory();
    
    const [email, setEmail]=useState("");
    const [pwd, setPwd]=useState("");

    function validateEntry(){
        return email.length>0 && pwd.length>0;
    }

    function handleSubmit(event){
        event.preventDefault();
    }


    return(
        <div>
            <NavBar/>
        
        <div className="Login">
            <h1 style={{textAlign:"center", marginTop:30}}>Login</h1>
            <Form className="LoginForm" onSubmit={handleSubmit}>
                <Form.Group className="formField" size="lg" controllId="email">
                    
                    <Form.Control
                        style={{fontSize: 15, padding:5, width:250}}
                        autoFocus
                        type="email"
                        placeholder="Email id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="formField" size="lg" controllId="pwd">
                    
                    <Form.Control
                        style={{fontSize: 15, padding:5, width:250}}
                        type="password"
                        placeholder="Password"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}/>
                </Form.Group>
                <a href="/ResetPass" className="forgotbtn" >Forgot Password?</a> 
                <Button className="LoginBtn" block size="lg"  type="submit" disabled={!validateEntry()} onClick={()=>history.push('Home')}>
                    LOGIN
                </Button>
                </Form>
                <div className="section2">
                <div className="register">
                    <span> New User? </span>
                    <Button className="registerBtn" onClick={() => history.push('SignUp')} style={{margin:0,
    padding:0,
    background: "none",
    border: 0,
    
    textDecorationLine: "underline"
}}>Register</Button>
                </div>

                </div>
            
        </div>
        </div>
         )
}
            
      


