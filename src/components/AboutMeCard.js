import Card from 'react-bootstrap/Card';
import MERNLogo from '../MERNLogo.png';

function AboutMeCard() {
  return (
    <Card>
      <Card.Header>About Me</Card.Header>
      <Card.Img variant="top" src={MERNLogo} className="mernLogo mx-auto" />
      <Card.Body>
      
        <Card.Text>
        I am a Digital Forensics Examiner with the King County Sheriff's Office and a Full Stack JavaScript Web Developer, MERN Stack. CompTIA S+, N+, A+ Certified. USSS Cyber Fraud Task Force Member. 

 I've worked to specialize my career toward the investigation of digital crimes to merge my education, interests, and passions of technology and psychology to help people. I am a Security Researcher and I spend my free time developing my Information Security and Web Development skills.
        
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AboutMeCard;