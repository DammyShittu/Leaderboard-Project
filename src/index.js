import './style.css';
import postScores from './postScores.js';
import getScores from './getScores.js';
import showScores from './showScores.js';

const refresh = document.getElementById('refresh');
const form = document.getElementById('form');
const gameApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NCTD2Hen6nVelUEWqa0w/scores';

refresh.addEventListener('click', () => {
  getScores(gameApi).then((data) => showScores(data.response));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});