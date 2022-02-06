import { useContext } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import * as ROUTES from "../constants/routes";
import { RemoveCircleOutlineSharp } from "@material-ui/icons";

//todo: user profile photos. think about that. gravatar?

export default function Footer() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  console.log("user", user);
  return (
    <footer>
      <div className="footer__wrapper">
        <p>I am the footer lol</p>
        <div className="footer__item">
          <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
        </div>
        <div className="footer__login">
          {user ? (
            <>
              <Link to={ROUTES.DASHBOARD}>Test</Link>
              <button
                title="Sign out"
                type="button"
                onClick={() => firebase.auth().signOut()}
                onKeyDown={(event) => {
                  if (event.key === "enter") {
                    firebase.auth().signOut();
                  }
                }}
              >
                Sign Out
              </button>
              <div className="footer__profilepic">
                <Link to={`/p/${user.displayName}`}>
                  <img
                    alt={`${user.displayName} profile pic`}
                    src={`/images/avatars/${user.displayName}.jpg`}
                  />
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link to={ROUTES.LOGIN}>
                <button type="button">Log In</button>
              </Link>
              <Link to={ROUTES.SIGN_UP}>
                <button type="button">Sign Up</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
