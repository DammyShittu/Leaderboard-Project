const showError = () => {
  const scoreInput = document.getElementById('score').value;
  const nameInput = document.getElementById('name').value;
  const errorMsg = document.getElementById('error-msg');
  const input = document.querySelector('input');
  console.log(input);

  if (nameInput === '' && scoreInput === '') {
    return;
  }
  if (nameInput === '' || scoreInput === '') {
    errorMsg.style.display = 'block';
  } else {
    input.addEventListener('focus', () => {
      errorMsg.style.display = 'none';
    });
  }
}