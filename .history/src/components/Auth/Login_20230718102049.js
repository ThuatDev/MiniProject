import "./Login.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiServices";
import axios from "axios";
import { toast } from "react-toastify";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  const handleLogin = async () => {
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/");
    }
    if (data && +data.EC !== 0) {
      toast.error(data.EM);
      console.log("res", data);
    }
  };
  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account yet?</span>
        {/* onClick={() => handleLogin()}> */}
        <button onClick={() => handleSignup()}>Sign up</button>
      </div>
      <div className="title col-4 mx-auto">ThuatDev</div>
      <div className="welcome col-4 mx-auto">Hello, who’s this?</div>
      <div className="content-form col-2 mx-auto">
        <div class="form-group">
          <label for="">Email</label>
          <input
            type="email"
            className="form-control"
            id=""
            aria-describedby="helpId"
            placeholder="bruce@wayne.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <input
            type="password"
            className="form-control"
            id=""
            aria-describedby="helpId"
            placeholder="At least 8 characters"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <span className="forgot-password">Forgot password ?</span>

        <div>
          <button className="btn-submit" onClick={() => handleLogin()}>
            login to ThuatDev
          </button>
        </div>
        <div className="text-center">
          <span className="back" onClick={() => handleBack()}>
            &#60;&#60;<i class="fa-sharp fa-solid fa-backward"></i>
            Go To Homepage
          </span>
        </div>
      </div>
    </div>
  );
};
export default Login;
