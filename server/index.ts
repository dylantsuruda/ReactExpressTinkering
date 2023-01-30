import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

interface SwapiResults {
  name: string;
}

app.get('/api/search/', async (req: Request, res: Response) => {
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

  const searchTerm = decodeURIComponent(req.query.term as string);

  const [people, planets] = await Promise.all([
    axios.get(`https://swapi.dev/api/people/?search=${encodeURIComponent(searchTerm)}`),
    axios.get(`https://swapi.dev/api/planets/?search=${encodeURIComponent(searchTerm)}`)
  ]);

  const peopleData = people.data;
  const planetsData = planets.data;

  const mergedResults = mergePeopleAndPlanetsResults(peopleData.results, planetsData.results);

  res.json({ results: mergedResults });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});