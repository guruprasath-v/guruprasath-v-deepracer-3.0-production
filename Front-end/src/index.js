import React from "react";
import ReactDOM from "react-dom";
import Dashboard from './components/Dashboard'
import Home from "./components/Home";
import Rootlayout from "./components/RootLayout";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Adminlogin from "./components/Adminlogin"
import Logout from "./components/Logout";
import Reset from "./components/Reset";
import Error404 from "./components/Error404";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
  RouterProvider
  } from "react-router-dom";


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"element={<Rootlayout />}>
        <Route index element={<Home />}/>
        <Route path="login" element={<Login />}/>
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path="admin/secure" element={<Admin />}/> 
        <Route path="admin-login" element={<Adminlogin />}/> 
        <Route path="/logout" element={<Logout />}/> 
        <Route path="/reset/password" element={<Reset />}/>
        <Route path="*" element={<Error404 />} />
      </Route>
    )
)


ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
