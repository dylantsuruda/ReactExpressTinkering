import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FormBootstrap from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';
import { Form as FormReact } from 'react-router-dom';
import { SwapiResultsTable } from '../SwapiResultsTable/SwapiResultsTable';

function ReactToExpressToSwapi() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermForTable, setSearchTermForTable] = useState("");
  const [resultsForTable, setResultsForTable] = useState([""]);
  const [showTable, setShowTable] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  async function search() {
    setShowTable(false);
    setShowSpinner(true);
    try {
      const response = await fetch(`/api/search/?term=${encodeURIComponent(searchTerm)}`);
      const data = await response.json();
      setSearchTermForTable(searchTerm);
      setResultsForTable(data.results);
      setShowSpinner(false);
      setShowTable(true);    
    }
    catch (error) {
      console.error(error);
      setShowSpinner(false);
      setShowTable(false);
    }
  }

  return (
    <>
      <h3>React to Express to SWAPI page</h3>
      <p>
        This search functionality is the same as the React to SWAPI page, but check the network tab -- the
        search on this page hits a different endpoint than the direct SWAPI endpoint.  
      </p>
      <FormReact method="get" onSubmit={search}>
        <FormBootstrap.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <FormBootstrap.Label>Search any person or planet in Star Wars by name:</FormBootstrap.Label>
          <Stack direction="horizontal" gap={3}>
            <FormBootstrap.Control type="search" placeholder="Search away" onChange={(event) => setSearchTerm(event.target.value)} />
            <Button type="submit">Search</Button>
          </Stack>
        </FormBootstrap.Group>
      </FormReact>
      {showSpinner && <Spinner animation="border" role="status" />}
      {showTable && <SwapiResultsTable searchTerm={searchTermForTable} results={resultsForTable} />}
    </>
  );
}

export { ReactToExpressToSwapi };
