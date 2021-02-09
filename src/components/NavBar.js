import React from 'react';
import {Link} from 'react-router-dom';

 function NavBar(){
    return(
        <ul style={{top:0, position:"sticky", background:"darkcyan",
        listStyle:"none", display:"flex"}}>
            <li style={{padding:10, paddingLeft:15}}><Link
            style={{textDecorationLine:"none", color:"white"}} to="/login">LOGIN</Link></li>
            <li style={{padding:10, paddingLeft:15}}><Link 
            style={{textDecorationLine:"none", color:"white"}} to="/SignUp">SIGN UP</Link></li>
            <li style={{padding:10, paddingLeft:15}}><Link 
            style={{textDecorationLine:"none", color:"white"}} to="/RecruiterForm">POST A JOB</Link></li>
        </ul>
    )
}

export default NavBar;