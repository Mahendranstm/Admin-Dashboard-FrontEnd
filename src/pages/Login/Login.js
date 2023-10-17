import React, { useEffect, useState } from "react";
import "./Login.css";
import Appbar from "../../components/Appbar/Appbar";
import axios from "../../axios";
import { setUser } from "../../slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/login", {
        username,
        password,
      });
      localStorage.setItem("userToken", JSON.stringify(res.data.token));
      const token = res.data.token;
      const getUser = async () => {
        try {
          const res = await axios.get(`/user/verify/${token}`);
          dispatch(setUser(res.data));
        } catch (error) {
          alert(error.response.data.msg);
        }
      };
      getUser();
      navigate("/dashboard");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

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

  return (
    <div className="login">
      <Appbar />
      <form className="login_form">
        <div className="login_card">
          <h1 className="login_title">LOGIN</h1>
          <p>Please enter your username and password</p>
          <div className="login_inputField">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />

            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login_button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
