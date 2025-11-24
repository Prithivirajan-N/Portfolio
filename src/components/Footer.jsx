import React from "react";

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "20px", marginTop: "40px" }}>
      © {new Date().getFullYear()} Prithivirajan N — Built with ❤️ using React.js
    </footer>
  );
}

export default Footer;
