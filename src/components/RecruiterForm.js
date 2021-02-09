import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';
import NavBar from './NavBar';
function RecruiterForm(){

    const history=useHistory();
    

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [comp, setComp]=useState("");
    
    function validateEntry(){
        return email.length>0 && name.length>0 && comp.length>0;
    }
    function handleSubmit(e){
        e.preventDefault();
    }
    return(

        <div>
            <NavBar/>
        
        <div className="RecLoginForm">
            <Form className="RecForm" style={{marginTop:50}} onSubmit={handleSubmit}>
                <h1 style={{textAlign:"center"}}>Recruiter Details</h1>
                <Form.Group className="formField" size="lg" controllId="name">
                    <label style={{fontWeight:"bold", paddingBottom:5}}>Full Name:</label> <br></br>
                    <Form.Control
                        style={{fontSize: 15, padding:5, width:250, marginTop:10}}
                        autoFocus
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="formField" size="lg" controllId="email">
                    <label style={{fontWeight:"bold", paddingBottom:5}}>Email id:</label> <br></br>
                    <Form.Control
                        style={{fontSize: 15, padding:5, width:250, marginTop:10}}
                        type="email"
                        placeholder="Email id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="formField" size="lg" controllId="comp">
                    <label style={{fontWeight:"bold", paddingBottom:5}}>Company Name: </label> <br></br>
                    <Form.Control
                        style={{fontSize: 15, padding:5, width:250, marginTop:10}}
                        
                        type="text"
                        placeholder="Company Name"
                        value={comp}
                        onChange={(e) => setComp(e.target.value)}/>
                </Form.Group>
                <Button type="submit" className="LoginBtn" disabled={!validateEntry()} style={{marginLeft:650}} onClick={()=>history.push("JobDetail")} >Next</Button>    
            </Form>
        </div>
        </div>
    )

}

export default RecruiterForm;