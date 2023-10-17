import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import User from "./pages/User/User";
import Create from "./pages/Create/Create";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import axios from "./axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./slices/userSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getToken = JSON.parse(localStorage.getItem("userToken"));
    if (getToken) {
      const getUser = async () => {
        try {
          const res = await axios.get(`/user/verify/${getToken}`);
          dispatch(setUser(res.data));
        } catch (error) {
          alert(error.response.data.msg);
        }
      };
      getUser();
    }
  }, []);

  const user = useSelector((state) => state.userInfo.user);
  console.log(user);
  return (
    <div>
      <BrowserRouter>
        {user ? (
          <>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<User />} />
              <Route path="/create" element={<Create />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
