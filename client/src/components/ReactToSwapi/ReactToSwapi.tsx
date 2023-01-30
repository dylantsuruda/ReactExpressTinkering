import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FormBootstrap from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';
import { Form as FormReact } from 'react-router-dom';
import { SwapiResultsTable } from '../SwapiResultsTable/SwapiResultsTable';

interface SwapiResults {
  name: string;
}

function ReactToSwapi() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermForTable, setSearchTermForTable] = useState("");
  const [resultsForTable, setResultsForTable] = useState<string[]>([]);
  const [showTable, setShowTable] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  async function search() {
    function mergePeopleAndPlanetsResults(peopleResults: SwapiResults[], planetsResults: SwapiResults[]) {
      const merged: string[] = [];
      for (const peopleResult of peopleResults) {
        merged.push(`${peopleResult.name} (person)`);
      }
      for (const planetsResult of planetsResults) {
        merged.push(`${planetsResult.name} (planet)`);
      }
      return merged;
    }

    setShowTable(false);
    setShowSpinner(true);

    try {
      const [people, planets] = await Promise.all([
        fetch(`https://swapi.dev/api/people/?search=${encodeURIComponent(searchTerm)}`),
        fetch(`https://swapi.dev/api/planets/?search=${encodeURIComponent(searchTerm)}`)
      ]);

      const peopleData = await people.json();
      const planetsData = await planets.json();

      const mergedResults = mergePeopleAndPlanetsResults(peopleData.results, planetsData.results);

      setSearchTermForTable(searchTerm);
      setResultsForTable(mergedResults);
      setShowSpinner(false);
      setShowTable(true);
    }
    catch (error) {
      console.error(error);
      setShowSpinner(false)
      setShowTable(false);
    }
  }

  return (
    <>
      <h3>React to SWAPI page</h3>
      <p>
        This search functionality is the same as the React to Express to SWAPI page, but check the network
        tab -- the search on this page directly hits two of the SWAPI endpoints.  
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

export { ReactToSwapi };
