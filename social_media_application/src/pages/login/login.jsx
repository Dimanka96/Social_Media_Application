import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const handleLogin = () => {
    login();
  };
    return (
        <div className="login">
        <div className="card">
          <div className="left">
            <h1>MySocial</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
              alias totam numquam ipsa exercitationem dignissimos, error nam,
              consequatur.
            </p>
            <div className="spanaccount">
            <span>Don't you have an account?</span>
            </div>
            <Link to="/register" style= { {textDecoration: 'none'}}>
            <button>Register</button>
            </Link>
              
            
          </div>
          <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;