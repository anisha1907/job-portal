import React,{ Component } from 'react';
import './SignUp.css';
import NavBar from './NavBar';
import{useHistory} from "react-router-dom"

export default class SignUp extends Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            pwd:''
        };

        this.update=this.update.bind(this);

        this.displayLogin=this.displayLogin.bind(this);
    }

    

    update(e){
        let name= e.target.name;
        let value=e.target.value;
        this.setState({
            [name]:value
        });
    }

    displayLogin(e){
        e.preventDefault();
		alert('You have successfully registered');
		console.log(this.state);
		this.setState({
			name: '',
			email: '',
			pwd: ''
		});
    }

    render(){
        return(
            <div>
            <NavBar/>
            <form style={{marginTop:"50px"}} onSubmit={this.displayLogin}>
                <h1 style={{textAlign:"center", marginLeft:"80px"}}>Create Account</h1>
                <div className="form-group">
                    <label style={{fontWeight:"bold"}}>Name: </label><br></br>
                    <input type="text" className="form-control" placeholder="Name" name="name" value={this.state.name} onChange={this.update}></input>
                </div>

                <div className="form-group">
                    <label style={{fontWeight:"bold"}}>Email: </label><br></br>
                    <input type="email" className="form-control" placeholder="Email"name="email" value={this.state.email} onChange={this.update}></input>
                 
                </div>

                <div className="form-group">
                    <label style={{fontWeight:"bold"}}>Password: </label><br></br>
                    <input type="password" security className="form-control" placeholder="Password" name="pwd" value={this.state.pwd} onChange={this.update}></input>
                
                </div>

                <div className="form-group">
                    <label style={{fontWeight:"bold"}}>Confirm Password:</label><br></br>
                    <input type="password" className="form-control" placeholder="Confirm Password" name="pwd1"></input>
                
                </div>

                <button block type="submit" className="btn btn-dark btn-lg btn-block" >Sign Up</button>
                <p className="extra-text">Already registered? 
                <a href="/Login">Log in</a></p>
            </form>
            </div>
        )
    }
}