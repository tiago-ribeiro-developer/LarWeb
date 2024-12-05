import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ReactNotifications } from "react-notifications-component";

/**
 * import css Bootstrap
 */
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * roteamento
 */
import AppRoutes from "./main/route/Route";

/**
 * LoadingProvider
 */
import { LoadingProvider } from "./data/context/LoadingContext";

/**
 * AlertProvider
 */
import { AlertProvider } from "./data/context/AlertContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AlertProvider>
      <LoadingProvider>
        <ReactNotifications />
        <AppRoutes />
      </LoadingProvider>
    </AlertProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
