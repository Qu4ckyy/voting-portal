import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MainPage from "./components/views/MainPage/MainPage";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
