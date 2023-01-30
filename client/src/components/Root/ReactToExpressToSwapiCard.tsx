import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

function ReactToExpressToSwapiCard() {
  return(
    <Card>
      <Card.Body>
        <Card.Title>React to Express to SWAPI calls</Card.Title>
        <Card.Text>
          Clicking here will take you to a page where the frontend JS will call the Express backend,
          and it's the Express backend that's calling SWAPI.
          This is me tinkering and seeing what a Node.js HTTP request to an external API looks like.
        </Card.Text>
        <LinkContainer to={"/make_react_to_express_to_swapi_calls"}>
          <Button>
            Make React to Express to SWAPI calls
          </Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}

export { ReactToExpressToSwapiCard };