import React from 'react';
import NavBar2 from './NavBar2';
import Button from 'react-bootstrap/Button'
import {useHistory} from 'react-router-dom'
export default function Profile(){

const history=useHistory();

    return (
        <div>
            <NavBar2/>
        
            <div className="ProfileDetails">
                <h1 style={{textAlign:"center", marginLeft:80}}> My Profile </h1>
                <Button onClick={()=>history.push("EditDetails")}>Edit Profile</Button>
                <br></br>

                <div style={{marginLeft:600, marginTop:50}}>
                <label style={{fontWeight:"bold",}} >Name: </label>
                <span>Anisha Sethi</span>

                <br>
                </br>

                <label style={{fontWeight:"bold"}}>Email: </label>
                <span>anishasethi24@gmail.com</span>

            </div>
            <Button style={{background:"brown"}} onClick={()=>history.push("Login")}>Sign Out</Button>
                
            </div>
        </div>
    )
}