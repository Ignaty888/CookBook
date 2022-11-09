const errLog = document.querySelector('.err-log');
const formLog = document.querySelector('#formLog');
formLog?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    email, password, action, method,
  } = event.target;
  const logpas = await fetch(action, {
    method,
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),

  });
  const data = await logpas.json();
  if (data.status === 'error') {
    errLog.innerHTML = data.message;
  } else {
    window.location.assign('/');
  }
});
