import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //import เข้ามา
import Login from "./Login.js";
import Album from "./Album";
import Regiter from "./Register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // ครอบไว้เพื่อเรียกใช้ภายใต้ Router
  <BrowserRouter>
    <Routes>
      {/* path = / go to App */}
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/album" element={<Album />} />
      <Route path="/register" element={<Regiter />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
