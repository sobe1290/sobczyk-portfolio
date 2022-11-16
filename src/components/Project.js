import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Project(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.tileImage} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.description}
        </Card.Text>
        <Button variant="primary" className="button-84">Visit Github Repo</Button>
      </Card.Body>
    </Card>
  );
}

export default Project;