import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

function ReactToSwapiCard() {
  return(
    <Card>
      <Card.Body>
        <Card.Title>React to SWAPI calls</Card.Title>
        <Card.Text>
          Clicking here will take you to a page where the frontend JS will directly call SWAPI.
        </Card.Text>
        <LinkContainer to="/make_react_to_swapi_calls">
          <Button>
            Make React to SWAPI calls
          </Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}

export { ReactToSwapiCard };