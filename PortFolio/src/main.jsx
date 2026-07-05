import React from "react";
import { createRoot } from "react-dom/client";
import { FormspreeProvider } from "@formspree/react";
import App from "./App";
import "./index.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormspreeProvider>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
    </FormspreeProvider>
  </React.StrictMode>
);