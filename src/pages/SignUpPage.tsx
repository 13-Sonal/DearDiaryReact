import React from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import '../styles/LoginPage.css'

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  contactNumber: yup.string().required("Contact number is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  dateOfBirth: yup
    .date()
    .typeError("Date of Birth must be a valid date (yyyy-mm-dd)")
    .required("Date of Birth is required"),
  password: yup.string().required("Password is required"),
  gender: yup.string().required("Gender is required"),
});

type FormData = yup.InferType<typeof schema>;

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const goToLogin = () => {
    navigate("/");
  }

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post('http://localhost:3000/users', data);
      console.log("response", response)
      navigate('/landing');
    } catch (error: any) {
      console.error("SignUp failed:", error.response?.data || error.message);
      alert("SignUp failed. Please check your details.");
    }
  }

  return(
    <div className="login-container">
      <div className="login-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Name" {...register("name")} />
          <p>{errors.name?.message}</p>

          <input type="text" placeholder="Contact Number" {...register("contactNumber")} />
          <p>{errors.contactNumber?.message}</p>

          <input type="text" placeholder="Email Address" {...register("email")} />
          <p>{errors.email?.message}</p>

          <input type="date" placeholder="Date Of Birth (yyyy-mm-dd)" {...register("dateOfBirth")} />
          <p>{errors.dateOfBirth?.message}</p>

          <input type="password" placeholder="Password" {...register("password")} />
          <p>{errors.password?.message}</p>

          <select {...register("gender")}>
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
          <p>{errors.gender?.message}</p>

          <button type="submit">SignUp</button>
        </form>

        <br />
        <button onClick={goToLogin}>Go to Login Page</button>
      </div>
    </div>
  );
};

export default SignUpPage;
