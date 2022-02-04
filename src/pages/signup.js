import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { doesUserNameExist } from "../services/firebase";

export default function SignUp() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleSignup = async (event) => {
    event.preventDefault();

    const userNameExists = await doesUserNameExist(username);
    if (!userNameExists.length) {
      try {
        console.log("trying something");
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);
        console.log("created user result", createdUserResult);
        //auth?
        await createdUserResult.user.updateProfile({
          displayName: username
        });

        //firebase user collection
        console.log("set username, now time to set user");
        await firebase.firestore().collection("users").add({
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          fullName: fullName,
          emailAddress: emailAddress.toLowerCase(),
          likedHaikus: [],
          dateCreated: Date.now()
        });

        navigate(ROUTES.DASHBOARD);
      } catch (error) {
        setFullName("");
        setEmailAddress("");
        setPassword("");
        setUsername("");
        setError(error.message);
      }
    } else {
      setError("username is taken!");
    }

    // try {
    // } catch (error) {}
  };

  useEffect(() => {
    document.title = "Sign Up - Haiku";
  }, []);

  return (
    <div className="login__wrapper">
      <h1>Sign up!</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignup} method="POST">
        <input
          aria-label="Enter your username"
          type="text"
          placeholder="Username"
          onChange={({ target }) => setUsername(target.value)}
          value={username}
        />
        <input
          aria-label="Enter your Full Name"
          type="text"
          placeholder="Full Name"
          onChange={({ target }) => setFullName(target.value)}
          value={fullName}
        />

        <input
          aria-label="Enter your email address"
          type="text"
          placeholder="Email Address"
          onChange={({ target }) => setEmailAddress(target.value)}
          value={emailAddress}
        />
        <input
          aria-label="Enter your password"
          type="password"
          placeholder="password"
          onChange={({ target }) => setPassword(target.value)}
          value={password}
        />

        <button
          className={"login__button btn--primary ${isInvalid && 'invalid'}"}
          disabled={isInvalid}
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <div className="login__signup">
        <p>
          Have an account? {""}
          <Link to={ROUTES.SIGN_UP}>Login!</Link>
        </p>
      </div>
    </div>
  );
}
