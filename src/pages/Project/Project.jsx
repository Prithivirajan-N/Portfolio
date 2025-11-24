import React from "react";
import "./Project.css";

function Project() {
  return (
    <div className="project-container">

      <h1 className="page-title">🚀 My Projects</h1>
      <p className="subtitle">Here are some of the applications I have built</p>

      <div className="project-grid">

        <div className="project-card">
          <h3>Time Tracker App</h3>
          <p>Full MERN stack application with live tracking, JWT auth, and cron jobs.</p>
        </div>

        <div className="project-card">
          <h3>Event Booking System</h3>
          <p>Backend API with authentication, bookings, admin panel, and notifications.</p>
        </div>

        <div className="project-card">
          <h3>Food Delivery API</h3>
          <p>Node.js + MongoDB food ordering system with cart & payment integration.</p>
        </div>

        <div className="project-card">
          <h3>Appsfor2 Time Tracker</h3>
          <p>Production-level live tracker used in company workflow.</p>
        </div>

      </div>
    </div>
  );
}

export default Project;
