import { loadAwards, loadSigils, loadHouses } from './modules/loadData.js';
import { initializeScrollReveal } from './modules/scrollReveal.js';

initializeScrollReveal();
loadAwards();
loadHouses();
loadSigils();
