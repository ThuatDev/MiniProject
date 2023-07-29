import "./Login.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiServices";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { doLogin } from "../../redux/reducer/userAction";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleBack = () => {
    navigate("/");
  };

  const handleLogin = async () => {
    setIsLoading(true);
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      dispatch(doLogin(data));
      if (!isToastVisible) {
        toast.success(data.EM);
        setIsToastVisible(true);
      }
      setIsLoading(false);
      navigate("/");
    }
    if (data && +data.EC !== 0) {
      if (!isToastVisible) {
        toast.error(data.EM);
        setIsToastVisible(true);
      }
      setIsLoading(false);
      console.log("res", data);
    }
  };

  useEffect(() => {
    return () => {
      setIsToastVisible(false);
    };
  }, []);

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
          <button
            className="btn-submit"
            onClick={() => handleLogin()}
            disabled={isLoading}
          >
            {isLoading === true && <ImSpinner9 className="loader-icon" />}
            <span>login to ThuatDev</span>
          </button>
        </div>
        <div className="text-center">
          <span className="back" onClick={() => handleBack()}>
            Go To Homepage
          </span>
        </div>
      </div>
    </div>
  );
};
export default Login;
