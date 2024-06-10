import { displayCards } from "./dom-manip.js";
import { updateBarChart, updateDonutChart } from './dom-manip.js';
import sampleMovies from "../../movie-data.json"

const main = () => {
  displayCards();
  updateBarChart(sampleMovies);
  updateDonutChart(sampleMovies);
  updateRadarChart(sampleMovies);
};

main();

