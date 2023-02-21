import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MyContext from "./Helpers/MyContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyContext>
);
