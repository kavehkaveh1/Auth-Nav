import React from "react";
import Home from "./component.jsx/home";
import Products from "./component.jsx/products";
import Navlink from "./component.jsx/navlink";
import { Routes, Route } from "react-router-dom";
import Harchi1 from "./component.jsx/Harchi1";
import Harchi2 from "./component.jsx/Harchi2";
import Users from "./component.jsx/users";
import UsersDetail from "./component.jsx/UsersDetail";
import NotFound from "./component.jsx/NotFound";
import About from "./component.jsx/About";
import Profile from "./component.jsx/profile";
import { AuthProvider } from "./component.jsx/auth";
import { Login } from "./component.jsx/Login";
import RequireAuth from "./component.jsx/RequireAuth";
function App() {
  return (
    <AuthProvider>
      <Navlink />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />}>
          <Route path="harchi1" element={<Harchi1 />} />
          <Route path="harchi2" element={<Harchi2 />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<UsersDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
