import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';
export default function JobDetail(){

    const [profile, setProfile]=useState("");
    const [location, setLoc]=useState("");
    const [exp, setExp]=useState("");
    const [desc, setDesc]=useState("");

    function validateEntry(){
        return profile.length>0 && location.length>0 && exp.length>0
            
    }

    function handleSubmit(e){
        e.preventDefault();
        alert("Job Posted Successfully");
    }
    
    return(
        <div>
            <NavBar/>
        
        <div className="JobDetail">
            <Form className="JobForm" onSubmit={handleSubmit}>
                <h2 style={{textAlign:"center"}}>Please fill in the Job Details</h2>
                <Form.Group className="formField" size="lg" controllId="profile">
                    <label style={{fontWeight:"bold"}}>Job Profile: </label>
                    <Form.Control
                        style={{fontSize: 15, padding:5, width:300, marginTop:20}}
                        autoFocus
                        type="text"
                        placeholder="Profile"
                        value={profile}
                        onChange={(e) => setProfile(e.target.value)}/>
                </Form.Group>
                <Form.Group className="formField" size="lg" controllId="location">
                    <label style={{fontWeight:"bold"}}>Job Location: </label>
                    <Form.Control
                        style={{fontSize: 15, padding:5, width:290, marginTop:10}}
                        
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLoc(e.target.value)}/>
                </Form.Group>
                <Form.Group className="formField" size="lg" controllId="exp">
                    <label style={{fontWeight:"bold"}}>Experience Required: </label>
                    <Form.Control
                        style={{fontSize: 15, padding:5, width:230, marginTop:10}}
                        
                        type="text"
                        placeholder="Experience"
                        value={exp}
                        onChange={(e) => setExp(e.target.value)}/>
                </Form.Group>
                <Form.Group className="formField" size="lg" controllId="desc">
                    <label style={{fontWeight:"bold"}}>Description: </label>
                    <Form.Control
                        style={{fontSize: 15, padding:5, width:300, marginTop:10, height: 50}}
                        
                        type="text"
                        placeholder="Description"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}/>
                </Form.Group>
                <Button type="submit" className="LoginBtn" disabled={!validateEntry()} style={{marginLeft:650}} >Post</Button>    
            
            </Form>
        </div></div>
    )
}