import React from "react";
import "./Home.css";
import myPic from "../../images/portfolio.jpeg";


function Home() {
  return (
    <div className="container home-page">

      {/* HERO */}
      <section className="hero-section">

        <div className="hero-left">
          <h1>
            Hi, I'm <span className="highlight">Prithivirajan N</span> 👋
          </h1>
          <h3>MERN Stack Developer • Backend Engineer (Node.js)</h3>

          <p>
            Currently working at <b>Appsfor2</b> as a backend-focused fullstack developer.
            I build scalable APIs using Node.js, Express, MongoDB and integrate with frontend teams.
          </p>

          <a href="/contact" className="btn btn-primary btn-lg mt-3">
            Hire Me 💼
          </a>
        </div>

        {/* PHOTO SECTION */}
        <div className="hero-right">
          <div className="profile-frame">
            <img src={myPic} alt="Prithiviraj" className="profile-img" />
          </div>
        </div>

      </section>

      {/* SKILLS */}
      <section className="skills-section">
        <h2>⚡ Skills</h2>

        <div className="skills-wrapper">
  <span className="skill-chip">Node.js</span>
  <span className="skill-chip">Express.js</span>
  <span className="skill-chip">MongoDB</span>
  <span className="skill-chip">React.js</span>
  <span className="skill-chip">REST APIs</span>
  <span className="skill-chip">JWT Auth</span>
  <span className="skill-chip">Redis (Caching)</span>
  <span className="skill-chip">WebSockets</span>
  <span className="skill-chip">HTML</span>
  <span className="skill-chip">CSS</span>
  <span className="skill-chip">JavaScript</span>
  <span className="skill-chip">MVC Architecture</span>
  <span className="skill-chip">Microservices</span>
  <span className="skill-chip">Render & Railway Deploy</span>
</div>

      </section>

      {/* EXPERIENCE */}
      <section className="experience-section">
        <h2>💼 Work Experience</h2>

        <ul>
          <li>Backend Engineer at Appsfor2 (UK)</li>
          <li>Built a complete Time Tracker app (Node + MongoDB)</li>
          <li>Created Food Delivery backend system</li>
          <li>Event Booking platform backend</li>
          <li>Worked with frontend team for API integration</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
