import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "./bootstrap.min.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import Shell from "./components/Shell"
import ShellHelper from "./components/ShellHelper"
import Privesc from "./components/Privesc"

const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <App />,
  },
  {
    path: "/shell",
    exact: true,
    element: <Shell />,
  },
  // {
  //   path: "/shell-bypass",
  //   element: "test",
  // },
  {
    path: "/shell-helper",
    exact: true,
    element: <ShellHelper />,
  },
  // {
  //   path: "/shell-image",
  //   element: "test",
  // },
  // {
  //   path: "/shell-modified",
  //   element: "test",
  // },
  // {
  //   path: "/priv-esc",
  //   element: <Privesc />,
  // },
  // {
  //   path: "/file-manager",
  //   element: "test",
  // },
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider exact router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
