import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";

const AuthView = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<Navigate replace to="signup" />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default AuthView;
