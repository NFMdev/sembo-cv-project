import './footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Let's Connect</h3>
          <p className="footer-text">
            Always interested in new opportunities and exciting projects.
            Let's build something amazing together!
          </p>
          <div className="footer-social">
            <a
              href="https://github.com/NFMdev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nico-fiorito/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:nicofioritom@gmail.com"
              className="social-link"
              aria-label="Send Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Tech Stack</h3>
          <div className="footer-tech">
            <span className="tech-tag">React</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Angular</span>
            <span className="tech-tag">Java</span>
            <span className="tech-tag">Spring Boot</span>
            <span className="tech-tag">PostgreSQL</span>
            <span className="tech-tag">Apache Flink</span>
            <span className="tech-tag">Mongo DB</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">Express.js</span>
            <span className="tech-tag">Docker</span>
            <span className="tech-tag">Mulesoft</span>
            <span className="tech-tag">AWS</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            © 2025 Nico Fiorito. Built with <FaHeart className="heart-icon" /> using React & TypeScript
          </p>
          <p className="footer-credit">
            <FaCode /> Crafted with passion for clean code and great user experiences
          </p>
        </div>
      </div>
    </footer>
  );
}
