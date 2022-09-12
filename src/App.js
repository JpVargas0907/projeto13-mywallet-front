import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/Login Screen/LoginScreen";
import RegisterScreen from "./components/Register Screen/RegisterScreen";
import HomeScreen from "./components/Home Screen/HomeScreen";
import NewTransictionScreen from "./components/New Transiction Screen/NewTransictionScreen";
import UserContext from "./contexts/UserContext";

function App() {
  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');
  const [transictionType, setTransictionType] = useState('');
  return (
    <UserContext.Provider value={{token, setToken, balance, setBalance, transictionType, setTransictionType }}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LoginScreen/>} />
          <Route path={"/register"} element={<RegisterScreen/>} />
          <Route path={"/home"} element={<HomeScreen/>} />
          <Route path={"/new-transiction"} element={<NewTransictionScreen/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    
  );
}

export default App;
