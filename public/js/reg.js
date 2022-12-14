const errReg = document.querySelector('.err-reg');
const reg = document.querySelector('#registerForm');

reg?.addEventListener('submit', async (e) => {
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

  if (data.status === 'error') {
    errReg.innerHTML = data.message;
  } else {
    window.location.assign('/');
  }
});
