const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');

const postScores = async (url) => {
  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: nameInput.value,
      score: scoreInput.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  nameInput.value = '';
  scoreInput.value = '';
  return result.json();
};

export default postScores;
