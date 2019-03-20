import React, { Component } from "react";
import * as firebase from "firebase";
import companyLogo from "./companyLogo.jpeg"
import profileLogo from "./profileLogo.png";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

export class Login extends Component{

    componentDidMount () {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",
        {
           size:"invisible"
        });
    }

    btnLogin(){
        var email = document.getElementById("login_email").value;
        var pass = document.getElementById("login_pass").value;
        
        if(isNaN(email)){
            firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
            window.alert("Incorrect Email or Password");
            });
        }else{
            const phoneNumber = "+91" + " "+ email.toString();
            const appVerifier = window.recaptchaVerifier;
            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then(confirmResult => {
                window.confirmResult = confirmResult;
                console.log("success"); 
            }).catch(error => {
                console.log(error)
            });
    
        }
    }
    
    render(){

        const responseGoogle = (response) => {
            window.alert("successfully logged in with Google as" + " "+ response.profileObj.email);
        }

        const responseFacebook = (response) => {
            console.log(response);
        }

        return(
            <div className="loginPage">
            <div className="container">

                <div className="col-sm-12" align="center">
                    <img src={companyLogo} className="mainLogo"></img>
                </div>

                <div className="card-group">
                    <div className="card bg-primary">
                       <div className="card-body text-center text-white">
                            <img src={profileLogo} className="dp"></img>
                        </div>
                    </div>    
                    
                    <div className="card bg-light">
                        <div className="card-body">
                            <div className="form-group">
                                <label className="text-muted">Email or mobile phone number</label>
                                <input type="text" className="form-control" id="login_email"></input>
                                <label className="text-muted">Password</label>
                                <input type="password" className="form-control" id="login_pass"></input>
                            </div>
                            <div>
                            <button type="submit" className="btn btn-primary" id="recaptcha-container" onClick={this.btnLogin}>Login</button>
                            </div>

                            <div className="frgtPass">
                                <a className="text-primary" href="./Forgotpass">ForgotPassword</a>
                            </div>
                            
                            <div className="altLogin" align="right">
                                <div>
                                <GoogleLogin
                                    clientId="432539867123-rr69mamn0tfd74h2g1escbbn2erth5ch.apps.googleusercontent.com"
                                    fields="name,email"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                />
                                </div>
                                <div className="facebook">
                                <FacebookLogin
                                    appId="430391491100621"
                                    autoLoad={true}
                                    fields="name,email"
                                    callback={responseFacebook}
                                    cssClass="facebookCall"
                                />
                                </div>
                            </div>

                            <div className="notify">
                                <small className="text-muted">Don't have an account?</small>
                                <a href="./Register">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
