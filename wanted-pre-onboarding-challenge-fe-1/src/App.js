import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, SignUp } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/auth/login" element={<Login />} />
        <Route exact path="/auth/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
