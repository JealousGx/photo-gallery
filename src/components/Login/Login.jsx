import { useState } from "react";
import "./Login.css";
require("dotenv").config({ path: ".env" });
const Login = ({ user, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (username === process.env.REACT_APP_USER_NAME ||
        username === process.env.REACT_APP_USER_EMAIL) &&
      password === process.env.REACT_APP_USER_PASS
    ) {
      setUser(true);
    } else {
      setUser(false);
      setUsername("");
      setPassword("");
      setError("Invalid email / username or password! Try again...");
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  };

  return (
    <div>
      {!user && (
        <div className="loginContainer">
          <div className="blurContainer" />
          <div className="login">
            <h3>Login</h3>
            <input
              required
              type="text"
              placeholder="Email or Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="submitBtn" onClick={handleSubmit}>
              Login
            </button>
            <div className="error">{showError && <p>{error}</p>}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
