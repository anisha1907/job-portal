import React from 'react';
import {Row, Col} from 'react-bootstrap'
export default function Job(){

    let title='Java Developer', 
    desc='We are hiring a java developer',
    comp='Google', 
    recName='Ronaldo', 
    recEmail='ronaldo@google.com';
    

    return(
        <div style={{borderWidth:2, margin:10, borderRadius:10, borderStyle:"solid", padding:10}}>
            <Row>
             <Col>   
            
                <div className="title">{title}</div>
                <div className="comp">{comp}</div>
            
            </Col>
            <Col>
            
                <div class="desc">{desc}</div>
                <div class="recDetails">
                    <label>Recruiter Name: </label>{recName}<br/>
                    <label>Recruiter Email: </label>{recEmail}
                </div>
               
                <div className="Apply">
                    <a href="#" onClick={()=>alert("Successfully Applied")}>Apply</a>
                </div>
            
            </Col>
            </Row>
        </div>
    )
}