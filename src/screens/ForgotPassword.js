import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="login-p flex flex-col aic">
      <div className="wrapper">
        <div className="logo flex aic">
          <img src="./images/logo.svg" className="img" />
        </div>
        <div className="title font s32 b5 c000">Forgot Password</div>
        <div className="feild flex flex-col">
          <div className="lbl font s14 c68">Email</div>
          <input type="text" className="iput font s14 c000" />
        </div>
        <div className="feild flex flex-col">
          <button className="cleanbtn submit-btn font s15 cfff">
            Reset Password
          </button>
        </div>
        <Link to="/login" className="font s14 c68">
          Or Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
