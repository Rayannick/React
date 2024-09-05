

import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root1");
ReactDOM.createRoot(entryPoint).render(React.createElement(App))
// ReactDOM.createRoot(entryPoint).render(<App />);
