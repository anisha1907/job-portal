import React from 'react';
import {Link} from 'react-router-dom';

 function NavBar2(){
    return(
        <ul style={{top:0, position:"sticky", background:"brown",
        listStyle:"none", display:"flex"}}>
            <li style={{padding:10, paddingLeft:15}}><Link 
            style={{textDecorationLine:"none", color:"white"}} to="/Home">HOME</Link></li>
            <li style={{padding:10, paddingLeft:15}} ><Link 
            style={{textDecorationLine:"none", color:"white"}} to="/Profile">PROFILE</Link></li>
            <li style={{padding:10, paddingLeft:15}}><Link 
            style={{textDecorationLine:"none", color:"white"}} to="/Applications">MY APPLICATIONS</Link></li>
            
        </ul>
    )
}

export default NavBar2;