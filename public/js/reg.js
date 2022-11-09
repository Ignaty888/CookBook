const errReg = document.querySelector('.err-reg');

document.querySelector('#registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const {
    login, email, password, action, method, passwordRepeat,
  } = e.target;

  const response = await fetch(action, {
    method,
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      login: login.value,
      email: email.value,
      password: password.value,
      passwordRepeat: passwordRepeat.value,
    }),
  });
  const data = await response.json();
  console.log(data.status);
  if (data.status === 'error') {
    errReg.innerHTML = data.message;
  } else {
    window.location.assign('/reg');
  }
});
