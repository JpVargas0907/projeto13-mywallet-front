import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/Login Screen/LoginScreen";
import RegisterScreen from "./components/Register Screen/RegisterScreen";
import HomeScreen from "./components/Home Screen/HomeScreen";
import NewTransictionScreen from "./components/New Transiction Screen/NewTransictionScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LoginScreen/>} />
        <Route path={"/register"} element={<RegisterScreen/>} />
        <Route path={"/home"} element={<HomeScreen/>} />
        <Route path={"/new-transiction"} element={<NewTransictionScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
