import './header.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

export function Header() {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I'm</span>
            <span className="hero-name">Nico Fiorito</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer</p>
          <p className="hero-description">
            Crafting elegant solutions with over six years of experience in software development.
            Passionate about building innovative applications that make a difference.
          </p>
          <div className="hero-actions">
            <a
              href="https://github.com/NFMdev"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button primary"
              aria-label="GitHub Profile"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nico-fiorito/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button primary"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:nicofioritom@gmail.com"
              className="hero-button secondary"
              aria-label="Send Email"
            >
              <FaEnvelope />
              <span>Contact</span>
            </a>
            <a
              className="hero-button secondary"
              aria-label="Download CV"
              href="src\assets\Nico_Fiorito_Resume_Full_Stack.pdf"
              download
            >
              <FaFileDownload />
              <span>Download CV</span>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-avatar-container">
            <div className="hero-avatar">
                <img className="avatar-image" src="src\assets\Fiorito.jpeg"></img>
            </div>
            <div className="hero-decoration hero-decoration-1"></div>
            <div className="hero-decoration hero-decoration-2"></div>
            <div className="hero-decoration hero-decoration-3"></div>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="var(--bg-primary)"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </header>
  );
}
