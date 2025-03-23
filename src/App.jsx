import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthView from "./views/auth";
import "./App.css";
import "./assets/styles/common.css";
import UserView from "./views/user";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path={`/auth/*`} element={<AuthView />} />
        {/* <Route path={`/auth/*`} element={<AuthView />} /> */}
        <Route path={`/user/*`} element={<UserView />} />
        <Route path="/auth/*" element={<Navigate to="/auth/" />} />
        <Route path="/" element={<Navigate to="/auth/" />} />
        <Route path="/*" element={<Navigate to="/auth/" />} />
      </Routes>
    </>
  );
}

export default App;
