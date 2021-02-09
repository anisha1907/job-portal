import React, { useState } from 'react';
import { Form, Button, Row, Col} from 'react-bootstrap';

export default function Search(){

    const [desc,setDesc]=useState("");
    const [loc, setLoc]=useState("");
    return (
        <div className="search">
            <Form className="searchForm">
                
                    
                        <Form.Group controllId="desc">
                            <Form.Control type="text" name="desc" value={desc} 
                            placeholder="Enter keyword to search" onChange={(e)=>setDesc(e.target.value)}/>
                        </Form.Group>
                    
                    
                        <Form.Group controllId="loc">
                            <Form.Control type="text" name="loc" value={loc} 
                            placeholder="Location" onChange={(e)=>setLoc(e.target.value)}/>
                        </Form.Group>
                    
                    
                        <Button type="submit">
                            Search
                        </Button>
                    
                
            </Form>
        </div>
    )
}