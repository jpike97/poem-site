import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";

export default function Login() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = async (event) => {
    event.preventDefault();

    console.log("test");

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);

      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress("");

      setPassword("");

      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = "Login - Haiku";
  }, []);

  return (
    <div className="login__wrapper">
      <h1>Log me in dude</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin} method="POST">
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
          Log In
        </button>
      </form>
      <div className="login__signup">
        <p>
          Don't have an account? {""}
          <Link to={ROUTES.LOGIN}>Sign up!</Link>
        </p>
      </div>
    </div>
  );
}
