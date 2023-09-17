import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import MERNLogo from '../MERNLogo.png';
import ProfilePic from '../profilepic.jpg';
import CFCE from '../CFCE-New-3-300x298.png';

function AboutMeCard() {
  return (
    <Card>
      <Card.Header>About Me</Card.Header>
      <Row className='mainPageRow'>
      <Col >
      <Card.Img variant="top" src={MERNLogo} className="mernLogo" />
      </Col>
      <Col className='profileCol'>
      <img src={ProfilePic} className="profilePic" alt="ProfilePic"></img>
      </Col>
      <Col className='profileCol'>
      <img src={CFCE} className="profilePic" alt="CFCE Logo"></img>
      </Col>
      
      <Col >
      <img src="https://tryhackme-badges.s3.amazonaws.com/sobewan.png" alt="TryHackMe"></img>
      </Col>

      </Row>
      
      
      <Card.Body>
      
        <Card.Text>
        I am a Digital Forensics Examiner, CFCE with the King County Sheriff's Office with experience in Full Stack Javascript Development, MERN Stack. CompTIA S+, N+, A+ Certified. USSS Cyber Fraud Task Force Member. M.S. in Forensic Psychology.
        </Card.Text>
        <Card.Text>
        I've worked to specialize my career toward the investigation of digital crimes to merge my education, interests, and passions of technology and psychology to help people. I am a Security Researcher and I spend my free time developing my Information Security and Web Development skills.
        </Card.Text>
        <Card.Text>
        Contact me if you would like to connect!
        </Card.Text>
        <Card.Text>
        Vulnerability Disclosure count : 1 ..(so far)
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default AboutMeCard;