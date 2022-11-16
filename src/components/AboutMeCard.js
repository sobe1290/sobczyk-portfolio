import { Stack } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import MERNLogo from '../MERNLogo.png';
import ProfilePic from '../profilepic.jpg';

function AboutMeCard() {
  return (
    <Card>
      <Card.Header>About Me</Card.Header>
      <Stack direction="horizontal" className="m-3 p-3">
      <img src={ProfilePic} className="profilePic" alt="ProfilePic"></img>
      <Card.Img variant="top" src={MERNLogo} className="mernLogo mx-auto" />
      </Stack>
      
      <Card.Body>
      
        <Card.Text>
        I am a Digital Forensics Examiner with the King County Sheriff's Office and a Full Stack JavaScript Web Developer, MERN Stack. CompTIA S+, N+, A+ Certified. USSS Cyber Fraud Task Force Member. 
        </Card.Text>
        <Card.Text>
        I've worked to specialize my career toward the investigation of digital crimes to merge my education, interests, and passions of technology and psychology to help people. I am a Security Researcher and I spend my free time developing my Information Security and Web Development skills.
        </Card.Text>
        <Card.Text>
        Contact me if you would like to connect!
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default AboutMeCard;