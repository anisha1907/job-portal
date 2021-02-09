import React from 'react';
import NavBar2 from "./NavBar2";
import Search from "./Search";
import Job from "./Job"

export default function Home(){

    return (
        <div className="HomeScreen">
            <NavBar2/>
            <h1 style={{padding: 10, textAlign:"center"}}>Welcome to the Job portal.</h1>
            <Search/>
            <Job/>
            <Job/>
            <Job/>
        </div>
    )
}