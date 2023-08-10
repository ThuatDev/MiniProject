import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postLogin } from "../../services/apiServices";
import { toast } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";
import { doLogin } from "../../redux/reducer/userAction";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check the local storage for 'persist:root' and parse it to an object
    const persistedData = JSON.parse(localStorage.getItem("persist:root"));

    // Check if 'persist:root' exists and if 'fk' is empty
    if (persistedData && !persistedData.fk) {
      // Perform any necessary actions here, such as redirecting to the login page
      navigate("/login");
    }
  }, []); // Empty dependency array to run this effect only once on component mount

  const handleBack = () => {
    navigate("/");
  };

  const handleLogin = async () => {
    setIsLoading(true);
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      dispatch(doLogin(data));
      toast.success(data.EM);
      setIsLoading(false);
      navigate("/");
    } else if (data && +data.EC !== 0) {
      toast.error(data.EM);
      setIsLoading(false);
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
        <button onClick={() => handleSignup()}>Sign up</button>
      </div>
      <div className="title col-4 mx-auto">ThuatDev</div>
      <div className="welcome col-4 mx-auto">Hello, who’s this?</div>
      <div className="content-form col-2 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="bruce@wayne.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
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
