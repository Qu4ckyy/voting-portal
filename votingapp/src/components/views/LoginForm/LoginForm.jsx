import React from "react";
import Login from '../../Login/Login';
import "./../../../scss/views-scss/LoginForm.scss";

const LoginForm = () => {

  return (
    <div className="main">
      <div className="left">
        <Login />
      </div>
      <div className="right">
      </div>
    </div>
  );
};

export default LoginForm;
