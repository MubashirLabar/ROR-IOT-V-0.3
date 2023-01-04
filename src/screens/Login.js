import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-p flex flex-col aic">
      <div className="wrapper">
        <div className="logo flex aic">
          <img src="./images/logo.svg" className="img" />
        </div>
        <div className="title font s32 b5 c000">Login</div>
        <div className="feild flex flex-col">
          <div className="lbl font s14 c68">Username</div>
          <input type="text" className="iput font s14 c000" />
        </div>
        <div className="feild flex flex-col">
          <div className="lbl font s14 c68">Password</div>
          <input type="text" className="iput font s14 c000" />
        </div>
        <div className="feild flex flex-col">
          <button className="cleanbtn submit-btn font s15 cfff">Login</button>
        </div>
        <Link to="/forgot" className="font s14 c68">
          Forgot Password ?
        </Link>
      </div>
    </div>
  );
};

export default Login;
