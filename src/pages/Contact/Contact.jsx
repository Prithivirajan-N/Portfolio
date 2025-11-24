import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendToWhatsApp = () => {
    if (!name || !email || !message) {
      alert("Please fill all fields nanba!");
      return;
    }

    const phone = "919025342026"; // your WhatsApp number

    const text =
      `New Portfolio Contact:%0A%0A` +
      `👤 Name: ${name}%0A` +
      `📧 Email: ${email}%0A` +
      `💬 Message: ${message}%0A%0A` +
      `Sent from your Portfolio Website`;

    const url = `https://wa.me/${phone}?text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <div className="contact-container">
      <h2 className="page-title">Contact Me</h2>

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
            placeholder="Your Message"
            rows="5"
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="send-btn" onClick={sendToWhatsApp}>
            Send Message to WhatsApp 💬
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
