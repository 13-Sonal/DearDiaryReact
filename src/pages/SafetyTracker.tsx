// React component for Period Tracker Form without Tailwind
// You can use standard CSS with classes instead

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datekpicker/dist/react-datepicker.css";
import "../styles/SafetyTrackerApp.css"; // Create this CSS file for styles

export default function PeriodTrackerForm() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [bleedingDays, setBleedingDays] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  return (
    <div className="tracker-wrapper">
      <h1 className="tracker-title">Your Health Matters :)</h1>

      <div className="tracker-container">
        <div className="tracker-section">
          <p className="tracker-label">START DATE</p>
          <DatePicker
            selected={startDate}
            // onChange={(date) => setStartDate(date)}
            className="tracker-datepicker"
            placeholderText="Select start date"
          />
        </div>

        <div className="tracker-form">
          <form className="tracker-form-inner">
            <div className="tracker-form-group">
              <label>Bleeding Days</label>
              <input
                type="number"
                min="1"
                className="tracker-input"
                value={bleedingDays}
                onChange={(e) => setBleedingDays(e.target.value)}
              />
            </div>

            <div className="tracker-form-group">
              <label>Height (cm)</label>
              <input
                type="number"
                className="tracker-input"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div className="tracker-form-group">
              <label>Weight (kg)</label>
              <input
                type="number"
                className="tracker-input"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </form>
        </div>

        <div className="tracker-section">
          <p className="tracker-label">END DATE</p>
          <DatePicker
            selected={endDate}
            // onChange={(date) => setEndDate(date)}
            className="tracker-datepicker"
            placeholderText="Select end date"
          />
        </div>
      </div>
    </div>
  );
}
