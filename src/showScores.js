const showScores = (points) => {
  const scoresContainer = document.getElementById('table');
  scoresContainer.innerHTML = '';
  points.sort((a, b) => parseInt(b.score, 10) - parseInt(a.score, 10));
  points.forEach((point) => {
    const scoreList = `<li class="name-scores">
    <p>${point.user}</p>
    <p> ${point.score}</p>
    </li>`;

    scoresContainer.innerHTML += scoreList;
  });
};

export default showScores;