const showScores = (scores) => {
  const scoresContainer = document.getElementById('table');
  scoresContainer.innerHTML = '';
  scores.forEach((user) => {
    const scoreList = `<li class="name-scores">${user.name}: ${user.score}</li>`;

    scoresContainer.innerHTML += scoreList;
  });
};

export default showScores;