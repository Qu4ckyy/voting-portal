import React, { useState } from "react";
import "../../scss/Login.scss";
import axios from "axios";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const loginFn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", userData);
      console.log("Logged in:", response.data);
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleRegisterClick = () => {
    window.location.href = "/Register";
    console.log("Handle register click...");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome to Voting app, create account and start voting</h2>
        <form onSubmit={loginFn}>
          <input
            className="email-input"
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <input
            className="password-input"
            type="password"
            placeholder="Hasło"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <button className="login-button" type="submit">
            Login
          </button>
          <h3>Don't have an account?</h3>
          <button
            className="register-button"
            type="button"
            onClick={handleRegisterClick}
          >
            Join now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
