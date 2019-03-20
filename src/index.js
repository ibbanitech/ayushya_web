import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";
import {Router, Route, browserHistory} from "react-router";
import {Login} from "./Login";
import {Register} from "./Register";
import {Forgotpass} from "./Forgotpass"
import "./index.css";


var config = {
    apiKey: "AIzaSyDz_azFjDn5C8KDE2DMQb-E7Jt3rS93lfA",
    authDomain: "trialchat-40e06.firebaseapp.com",
    databaseURL: "https://trialchat-40e06.firebaseio.com",
    projectId: "trialchat-40e06",
    storageBucket: "trialchat-40e06.appspot.com",
    messagingSenderId: "764849500762"
  };

  firebase.initializeApp(config);


class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path={"Login"} component={Login}/>
                <Route path={"Register"} component={Register}/>
                <Route path={"Forgotpass"} component={Forgotpass}/>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
