import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="light-footer">
      <div className="footer-container">
        <div className="footer-section brand">
          <h2>🏡 PrivateProperty</h2>
          <p>
            Helping you discover, rent or sell property easily, quickly, and
            securely.
          </p>
        </div>

        <div className="footer-section links">
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/properties">Properties</a>
            </li>
            <li>
              <a href="/agents">Agents</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact</h4>
          <p>Email: Private Property Rental@gmail.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Location: Islamabad, Pakistan</p>
        </div>

        <div className="footer-section socials">
          <h4>Follow</h4>
          <div className="icons">
            <a href="https://github.com/muhammad-boop">
              <i className="fab fa-facebook-f">
                <span className="sr-only">GitHub</span>
              </i>
            </a>
            <a href="https://profile.indeed.com/">
              <i className="fab fa-instagram">
                <span className="sr-only">LinkedIn</span>
              </i>
            </a>
            <a href="https://stackoverflow.com/users/28359661/muhammad-raza-khan">
              <i className="fab fa-twitter">
                <span className="sr-only">Stack</span>
              </i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} PrivateProperty Rentl. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
