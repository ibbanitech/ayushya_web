import React, { Component } from "react";
import * as firebase from "firebase";
import companyLogo from "./companyLogo.jpeg"

export class Register extends Component{

    btnRegister(){
        var uname = document.getElementById("username").value;
        var contact = document.getElementById("cnctNum").value;
        var email_id = document.getElementById("email").value;
        var password = document.getElementById("pass").value;
        var repeatPass = document.getElementById("repPass").value;

        if(uname === "" | contact === "" | email_id === "" | password === "" | repeatPass === ""){
            window.alert("Please ensure that you have entered all the feilds");
        } 
        else if(isNaN(contact) | contact.length !== 10){
            window.alert("Please enter a valid contact number");
        }  
        else if(repeatPass !== password){
            window.alert("Please check your password");
        }
        else{
            firebase.auth().createUserWithEmailAndPassword(email_id, password).then(function(){
                var userId = firebase.auth().currentUser.uid;
                   
                firebase.database().ref('users/' + userId).set({
                  username: uname,
                  contact_no:contact,
                  email_id: email_id
                });

            }).catch(function(error) {
                window.alert("Oops!! There was some proplem in registration. Please try again..")
            });
          
        }
    }

    render(){
        return(
            <div className="registerPage">
            <div className="container">

                <div className="col-sm-12" align="center">
                    <img src={companyLogo} className="mainLogo"></img>
                </div>

                <div className="card-group">    
                    <div className="card bg-light">
                        <div className="card-body">
                            <div className="form-group">
                                <label className="text-muted">Name</label>
                                <input type="text" className="form-control" id="username"></input>
                                
                                <label className="text-muted">Contact Number</label>
                                <input type="text" className="form-control" id="cnctNum"></input>

                                <label className="text-muted">Email</label>
                                <input type="email" className="form-control" id="email"></input>

                                <label className="text-muted">Password</label>
                                <input type="password" className="form-control" id="pass"></input>

                                <label className="text-muted">Repeat Password</label>
                                <input type="password" className="form-control" id="repPass"></input>
                                
                                <div className="condition">
                                    <label className="text-muted">Register as:</label>
                                </div>
                                
                                
                                <div className="options">
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" name="qualification" value="RE"></input>
                                        <label className="form-check-label text-muted">Repair Engineer</label>
                                    </div>

                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" name="qualification" value="SE"></input>
                                        <label className="form-check-label text-muted">Service Engineer</label>
                                    </div>

                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" name="qualification" value="Mngmt"></input>
                                        <label className="form-check-label text-muted">Management</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                            <button type="submit" className="btn btn-primary" onClick={this.btnRegister}>Register</button>
                            </div>

                            <div className="notify">
                                <small className="text-muted">Don't have an account?</small>
                                <a href="/Login">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

