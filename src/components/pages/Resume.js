import React from 'react';
import {Container, Row, Col, Button}  from 'react-bootstrap';

import '../../css/Resume.css';

const skillsList = [
  "JavaScript",
  "React",
  "Node.js",
  "HTML",
  "CSS",
  "Git",
  "SQL",
  "MongoDB",
  "Express"
];
export default function Resume() {
  return (
    <Container>
      <Row>
        <Col>
        <h2>Skills</h2>
          <ul>
            {skillsList.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
      
        <h2>Resume</h2>
        <p>
            If you want to learn more about my skills and experience, be sure to check out my downloadable resume. It provides a detailed overview of my education, work history, and technical expertise. With my resume, you'll get a sense of what I bring to the table as a web developer and what sets me apart from the rest. So take a look and see for yourself why I'm the right fit for your project.
        </p>
        
        <Button className='button' href = '/docs/Resume.pdf' download="resume.pdf">Download resume</Button>
        </Col>
      </Row>
    </Container>
  );
}
