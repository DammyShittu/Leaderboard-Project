const showError = () => {
  const errorMsg = document.getElementById('error-msg');
  const inputs = document.querySelectorAll('input');

  if (inputs.value === '') {
    return;
  }

  inputs.forEach((input) => {
    if (input.value === '') {
      errorMsg.style.display = 'block';
    }

    input.addEventListener('focus', () => {
      setTimeout(() => {
        errorMsg.style.display = 'none';
      }, 200);
    });
  });
};

export default showError;