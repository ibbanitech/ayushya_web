import React, { Component } from "react";
import companyLogo from "./companyLogo.jpeg"

export class Forgotpass extends Component{
    render(){
        return(
            <div className="forgotPassPage">
                
                <div className="container">

                    <div className="col-sm-12" align="center">
                        <img src={companyLogo} className="mainLogo"></img>
                    </div>
                    
                    <div className="card-group">
                        <div className="card bg-light">
                            <div className="card-body">
                                <div className="form-group">
                                    <label className="text-muted">Mobile phone number</label>
                                    <input type="text" className="form-control" id="phno"></input>
                                </div>    
                                <div className="confirm" align="center">
                                    <button type="submit" className="btn btn-primary" onClick={this.btnConfirm}>Confirm</button>
                                </div>

                                <div className="info">
                                    <p className="text-primary">
                                        Please enter your phone number associated with your Ayushya account for verification. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}