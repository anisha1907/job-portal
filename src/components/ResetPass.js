import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';
export default function ResetPass(){
    
    const [email, setEmail]=useState("");

    function validateEntry(){
        return email.length>0;
    }

    function handleSubmit(e){
        e.preventDefault();
        alert("Please check your email inbox for password reset link");
    }


    return(
        <div>
            <NavBar/>
        <div className="ResetPass">
            <Form className="ResetForm" style={{marginTop:50}} onSubmit={handleSubmit}>
                <h1 style={{textAlign:"center"}}>Reset Password</h1>

                <Form.Group className="formField" size="lg" controllId="email">
                    <label style={{fontWeight:"bold", paddingBottom:10, marginBottom: 20}}>Enter your registered email id:</label> <br></br>
                    <Form.Control
                        style={{fontSize: 15, padding:5, width:250, marginTop:20}}
                        autoFocus
                        type="email"
                        placeholder="Email id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Button type="submit" className="Resetbtn" disabled={!validateEntry()} >Submit</Button>    
            </Form>

        </div>
        </div>

    )
}