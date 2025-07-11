import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/MeasureCyclePage.css"
import { useNavigate } from "react-router-dom";

const HygeneTracker: React.FC = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [cycleLength, setCycleLength] = useState("");

  const token = localStorage.getItem("token"); 

  
  const submitUserData = async () => {
    const data = { 
      start_date: startDate, 
      end_date: endDate, 
      weight,
      height, 
      cycle_length: cycleLength };

    try {
      const response = await axios.post(
        "http://localhost:3000/cycle_trackers", 
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      debugger;
      const bmi = response.data?.bmi;
      const bmi_status = response.data?.bmi_status;
      // const period_health = response.data?

      if (response.status === 201 || response.status === 200){
        navigate('/SummaryPage', {
          
        })
      }

    
      console.log("response", response);


    } catch (error: any) {
      console.error("Submit failed:", error.response?.data || error.message);
    }
  };

  // useEffect(() =>{
  //   submitUserData();
  // }, []);

  return (
    <div className="outer-wrapper">
      <div className="page">
        <div className="measure-container">
          <h1 className="heading">LET’S MEASURE YOUR PERIOD CYCLE</h1>

          <div className="form-group">
            <label>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Height</label>
            <input
              type="text"
              placeholder="in cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Cycle Length</label>
            <input 
              type = "text"
              placeholder = "in days"
              value={cycleLength}
              onChange={(e) => setCycleLength(e.target.value)}
              />
          </div>

          <div className="form-group">
            <label>Weight</label>
            <input
              type="text"
              placeholder="in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <button className="submit-btn" onClick={submitUserData}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );

};

export default HygeneTracker;
