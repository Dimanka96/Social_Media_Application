import React from "react";
import { Link } from "react-router-dom";
import "./register.css"
const Register = () => {
    return (
        <div className="register">
        <div className="cardRegister">
          <div className="left">
            <h1>MySocial</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
              alias totam numquam ipsa exercitationem dignissimos, error nam,
              consequatur.
            </p>
            <div className="spanaccount">
            <span>Do you have an account?</span>
            </div>
            
            <Link to="/login" style= { {textDecoration: 'none'}}>
            <button>Login</button>
            </Link>
            
          </div>
          <div className="right">
            <h1>Login</h1>
            <form>
            <input type="text" placeholder="User Name"/>
            <input type="email" placeholder="Email"/>
            <input type="text" placeholder="Name"/>
            <input type="password" placeholder="Password"/>
              <button>Register</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Register;