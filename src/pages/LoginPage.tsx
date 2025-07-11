import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles/LoginPage.css"; 

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required")
}).required();

type FormData = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const goToSignUp = () => {
    navigate("/signup");
  };

  const handleLogin = async (data: FormData) => {
    try {
      const response = await axios.post("http://localhost:3000/login", data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/landing");
    } catch (error: any) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>

          <button type="submit">Login</button>
        </form>
        <div style={{ textAlign: "center" }}>
          <button className="signup-button" onClick={goToSignUp}>
            Hey new user!! Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
