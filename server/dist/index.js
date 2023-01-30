"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/api/search/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    function mergePeopleAndPlanetsResults(peopleResults, planetsResults) {
        const merged = [];
        for (const peopleResult of peopleResults) {
            merged.push(`${peopleResult.name} (person)`);
        }
        for (const planetsResult of planetsResults) {
            merged.push(`${planetsResult.name} (planet)`);
        }
        return merged;
    }
    const searchTerm = decodeURIComponent(req.query.term);
    const [people, planets] = yield Promise.all([
        axios_1.default.get(`https://swapi.dev/api/people/?search=${encodeURIComponent(searchTerm)}`),
        axios_1.default.get(`https://swapi.dev/api/planets/?search=${encodeURIComponent(searchTerm)}`)
    ]);
    const peopleData = people.data;
    const planetsData = planets.data;
    const mergedResults = mergePeopleAndPlanetsResults(peopleData.results, planetsData.results);
    res.json({ results: mergedResults });
}));
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
