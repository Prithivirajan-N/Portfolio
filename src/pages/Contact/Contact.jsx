import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendToWhatsApp = () => {
    if (!name || !email || !message) {
      alert("Please fill in all fields so I can get back to you 😊");
      return;
    }

    const phone = "919025342026"; // your WhatsApp number

    const text =
      `📩 You have a new message from your Portfolio!%0A%0A` +
      `👤 Name: ${name}%0A` +
      `📧 Email: ${email}%0A` +
      `💬 Message: ${message}%0A%0A` +
      `Sent from your Portfolio Website 🌟`;

    const url = `https://wa.me/${phone}?text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <div className="contact-container">
      <h2 className="page-title">Let's Connect! 🚀</h2>
      <p style={{ textAlign: "center", marginBottom: "30px", fontSize: "1.1rem", opacity: 0.85 }}>
        Have a question, an idea, or just want to say hello? Send me a message and let's chat! 💬
      </p>

      <div className="contact-card">
        <div className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Type your message here..."
            rows="5"
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="send-btn" onClick={sendToWhatsApp}>
            🚀 Send Message via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
