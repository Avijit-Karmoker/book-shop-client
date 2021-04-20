import React, { useContext } from "react";
import firebaseConfig from "../../firebase.config";
import google from "../../logo/google.png";
import firebase from "firebase/app";
import "firebase/auth";
import {UserContext} from '../../App';
import "./Login.css";
import { useHistory, useLocation } from "react-router";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const googleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        setLoggedInUser(user);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <div className="login-type" onClick={googleLogin}>
        <img src={google} alt="" />
        <h5>Continue with Google</h5>
      </div>
      {loggedInUser && <h1>{loggedInUser.displayName}</h1>}
    </div>
  );
};

export default Login;
