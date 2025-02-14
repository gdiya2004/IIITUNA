import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Evervice</h2>

        <p className="footer-text">Your trusted event planning partner.</p>

        <p className="footer-social">Stay Connected</p>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Evervice</p>
          <p>Made by YourName</p>
        </div>
      </div>
    </footer>
  );
};


