import "./Login.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThinkPeaks } from "@fortawesome/free-brands-svg-icons";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { FcPlus } from "react-icons/fc";
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
            Go To Homepage
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z"/></svg>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Login;
