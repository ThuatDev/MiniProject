import "./Login.scss";
import React, { useState, useEffect } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <div className="header">Don't have an account yet?</div>
      <div className="title col-4 mx-auto">ThuatDev</div>
      <div className="welcome col-4 mx-auto">Hello, who’s this?</div>
      <div className="content-form col-4 mx-auto">
        <div class="form-group">
          <label for="">Email</label>
          <input
            type="{email}"
            className="form-control"
            id=""
            aria-describedby="helpId"
            placeholder=""
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <input
            type="{password}"
            className="form-control"
            id=""
            aria-describedby="helpId"
            placeholder=""
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <span className="forgot-password">Forgot password ?</span>

        <div>
          <button className="btn-submit">login to ThuatDev</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
