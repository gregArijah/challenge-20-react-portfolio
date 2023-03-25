import React from 'react';
import '../../css/About.css';

export default function About() {
  return (
    <div>
        <h2>Resume</h2>
        <p>
            "If you want to learn more about my skills and experience, be sure to check out my downloadable resume. It provides a detailed overview of my education, work history, and technical expertise. With my resume, you'll get a sense of what I bring to the table as a web developer and what sets me apart from the rest. So take a look and see for yourself why I'm the right fit for your project."
        </p>
        <a href = '../../docs/Resume.pdf' download="resume.pdf">Click for resume</a>
    </div>
  );
}
