import React from "react";
import "./styles.css";

export default function Portfolio() {
  return (
    <div>
      <header>
        <h1>Sanyam Rehi</h1>
        <p>Junior Laravel Developer</p>
        <p><a href="mailto:sanyamrehi@gmail.com">sanyamrehi@gmail.com</a> | +91 94094 11703</p>
        <div className="social">
          <a href="https://github.com/sanyamrehi" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sanyam-rehi-9a4a9a21a" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

      <section id="about">
        <h2 className="section-title">About Me</h2>
        <div className="card">
          <p>
            Dedicated Laravel Developer with a B.Tech in Computer Engineering and internship experience in
            PHP-based systems. Skilled in Laravel, MySQL, Blade, Bootstrap, and full-stack web development.
            Eager to build clean and scalable web apps.
          </p>
        </div>
      </section>

      <section id="skills">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid grid-2">
          <div className="card"><strong>Languages:</strong><br /> PHP, JavaScript, Python, HTML, CSS</div>
          <div className="card"><strong>Frameworks:</strong><br /> Laravel, Flask, Bootstrap</div>
          <div className="card"><strong>Databases:</strong><br /> MySQL, SQLite</div>
          <div className="card"><strong>Tools:</strong><br /> Git, VS Code, Postman, XAMPP</div>
        </div>
      </section>

      <section id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="grid">
          <div className="card">
            <strong>Job Portal (Laravel)</strong>
            <p>Employer & candidate system with job posting, applications, and admin dashboard.</p>
          </div>
          <div className="card">
            <strong>Family Tree Website</strong>
            <p>Dynamic parent-child data structure with photo uploads and relationship management.</p>
          </div>
          <div className="card">
            <strong>Web Scraper (Python)</strong>
            <p>Product scraper using BeautifulSoup with pagination and CSV export.</p>
          </div>
        </div>
      </section>

      <section id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="card">
          <strong>Laravel Developer Intern – Excelsior Technologies</strong>
          <p>Oct 2024 – Apr 2025</p>
          <ul>
            <li>Developed Laravel modules and internal tools</li>
            <li>Worked on family tree and task management features</li>
            <li>Used Blade templates, REST APIs, migrations</li>
          </ul>
        </div>
      </section>

      <section id="education">
        <h2 className="section-title">Education</h2>
        <div className="grid grid-2">
          <div className="card">
            <strong>B.Tech in Computer Engineering</strong>
            <br />Atmiya Institute (2020–2023)
          </div>
          <div className="card">
            <strong>Diploma in Computer Engineering</strong>
            <br />Kalyan Polytechnic (2017–2020)
          </div>
          <div className="card">
            <strong>Secondary School (X)</strong>
            <br />Gujarat Board (2017)
          </div>
        </div>
      </section>

      <section id="contact">
        <h2 className="section-title">Contact</h2>
        <div className="card">
          <p>Email: <a href="mailto:sanyamrehi@gmail.com">sanyamrehi@gmail.com</a></p>
          <p>Phone: +91 94094 11703</p>
          <p>GitHub: <a href="https://github.com/sanyamrehi" target="_blank" rel="noreferrer">github.com/sanyamrehi</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/sanyam-rehi-9a4a9a21a" target="_blank" rel="noreferrer">sanyam-rehi</a></p>
        </div>
      </section>

      <footer>
        &copy; 2025 Sanyam Rehi — Built with React & ❤️
      </footer>
    </div>
  );
}
