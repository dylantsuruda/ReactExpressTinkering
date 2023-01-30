import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

interface SwapiResultsTableProps {
  searchTerm: string;
  results: string[];
}

function SwapiResultsTable(props: SwapiResultsTableProps) {
  const [favoriteAlternatingFlag, setFavoriteAlternatingFlag] = useState(false);

  function createTableRows(searchTerm: string, results: string[]): JSX.Element {

    function renderFavoriteButton(entity: string): JSX.Element {

      function markAsFavorite() {
        localStorage.setItem("favorite", entity);
        setFavoriteAlternatingFlag(!favoriteAlternatingFlag);
      }

      if (localStorage.getItem("favorite") === entity) {
        return (
          <Button variant='primary' disabled>Favorite!</Button >
        );
      }
      else {
        return (
          <Button variant='outline-secondary' onClick={markAsFavorite}>Mark as favorite</Button >
        );
      }
      
    }

    if (results.length === 0) {
      return (
        <tr>
          <td>
            No results found for <i>{searchTerm}</i>
          </td>
        </tr>
      );
    }
    else {
      return (
        <>
          {
            results.map((element: string, index: number) => (
              <tr key={index}>
                <td>
                  <Stack direction='horizontal' gap={3}>
                    <>{element}</>
                    {renderFavoriteButton(element)}
                  </Stack>
                </td>
              </tr>
            ))
          }
        </>
      );
    }
  }

  return (
    <Table bordered hover>
      <tbody>
        {createTableRows(props.searchTerm, props.results)}
      </tbody>
    </Table>
  );
}

export { SwapiResultsTable };
