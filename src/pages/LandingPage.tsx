import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState<any>(null);
  debugger;
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchCurrentUser();
  }, []);
  const fetchCurrentUser = async () => {
    try {
      const userResponse = await axios.post(
        "http://localhost:3000/current_user", 
        { token },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
        debugger;
        console.log(userResponse.data); 
        setUser(userResponse.data);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      };

  const saveCall = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/my_dairies",
        { date, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response", response);
      navigate("/landing");
    } catch (error: any) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleSignOut = () => {
    navigate("/");
  };

  const handleClick = () => {
    navigate("/MeasureCyclePage")
  }

  const handleReset = () => {
    setDate("");
    setDescription("");
  };
  console.log("user", user);
  return (
    <div className="outer-wrapper">
      <div className="page">
        <h1 className="top-title">Your</h1>
        <h2 className="main-title">Dear Diary</h2>
        <div className="divider"></div>

        <input
          type="date"
          className="input-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <div className="frame">
          <textarea
            className="diary-text"
            placeholder="Share your thoughts"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        
        <div className="button-group">
          <button onClick={saveCall}>Save</button>
          <button onClick={handleReset}>Reset</button>
          <button disabled>Grammarly</button>
          <button onClick={handleSignOut}>Sign Out</button>
          {/* {user?.gender === "female" && ( */}
          <button onClick={handleClick}>Period Tracker</button>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
