import React from "react";
import "./Project.css";

function Project() {
  return (
    <div className="project-container">

      <h1 className="page-title">🚀 My Projects</h1>
      <p className="subtitle">Here are some of the applications I have built</p>

      <div className="project-grid">

        <div className="project-card">
          <h3>Time Tracker App (React Native + Node.js)</h3>
          <p>
            Mobile application for employees to clock in/out, view work hours, and request leaves.
            Backend includes JWT authentication, MongoDB, and secure API endpoints.
          </p>
        </div>

        <div className="project-card">
          <h3>Food Delivery App (Dumdine)</h3>
          <p>
            Full-featured food ordering platform with cart management, live menu, and payment integration
            using Stripe. Backend built with Node.js and MongoDB for efficient order management.
          </p>
        </div>

        <div className="project-card">
          <h3>Appsfor2 Time Tracker (Company Workflow)</h3>
          <p>
            Production-level employee tracking system used at Appsfor2. Includes clock-in/out, leave
            requests, admin approval, and filtered time entry reports for management.
          </p>
        </div>

        <div className="project-card">
          <h3>Cromwell Diwali Event Booking Website</h3>
          <p>
            Event booking platform for Diwali celebration. Features user registration, booking
            management, and admin controls for event scheduling and attendee management.
          </p>
        </div>

        <div className="project-card">
          <h3>Event Booking Website</h3>
          <p>
            Web application for managing and booking various events. Includes user authentication,
            event listings, booking management, and admin panel to track attendees and approvals.
          </p>
        </div>

        <div className="project-card">
          <h3>Personal E-commerce Website</h3>
          <p>
            Fully functional e-commerce platform built from scratch with product listings, cart,
            payment integration, and order tracking. Backend with Node.js, Express, MongoDB.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Project;
