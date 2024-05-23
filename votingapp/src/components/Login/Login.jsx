import React, { useState } from "react";
import "../../scss/Login.scss";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const loginFn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        window.location.href = "/";
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRegisterClick = () => {
    window.location.href = "/Register";
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
            placeholder="Password"
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
