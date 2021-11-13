import { placeholder } from "@babel/types";
import { auth } from "./firebase";
import React, { useState } from "react";
import "./styles/Login.css";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core";

function Login() {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        dispatch(
          login({
            displayName: authUser.displayName,
            uid: authUser.uid,
            email: email,
            photoURL: authUser.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!name) {
      return alert("Full name Required!!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser
          .updateProfile({
            displayName: name,
            photoURL: photoURL,
          })
          .then(() => {
            dispatch(
              login({
                displayName: name,
                uid: authUser.uid,
                email: email,
                photoURL: photoURL,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="loginContainer">
      <div className="appLogo_big">
        Social App
        <p>by Heakl</p>
      </div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name (If Registering)"
        />
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          placeholder="PhotoURL (Optional)"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
        />
        <button onClick={loginToApp} type="submit">
          Sign in
        </button>
      </form>
      <p>
        Not part of our family?
        <span onClick={register} className="login__register">
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;
