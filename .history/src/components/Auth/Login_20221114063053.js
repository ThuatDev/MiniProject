import "./Login.scss";
const Login = (props) => {
  return (
    <div className="login-container">
      login component
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
          />
        </div>
        <span>Forgot password ?</span>
        <button>login to ThuatDev</button>
      </div>
    </div>
  );
};
export default Login;
