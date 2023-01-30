import CardGroup from 'react-bootstrap/CardGroup';
import { ReactToSwapiCard } from './ReactToSwapiCard';
import { ReactToExpressToSwapiCard } from './ReactToExpressToSwapiCard';

function Root() {
  return(
    <>
      <p>
        Some tinkering with a React frontend and an Express/Node.js backend.
        Also, some interaction with
        the <a href="https://swapi.dev/" target="_blank" rel="noreferrer">Star Wars API (SWAPI)</a>.
      </p>
      <CardGroup>
        <ReactToSwapiCard />
        <ReactToExpressToSwapiCard />
      </CardGroup>
    </>
  );
}

export { Root };
