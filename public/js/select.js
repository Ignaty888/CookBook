const selectForm = document.querySelector('.form-select');
selectForm?.addEventListener('change', async (event) => {
  console.log(event.target.value);
  const response = await fetch('/', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key: event.target.value }),
  });
  const data = await response.json();
  console.log(data);
  if (data) {
    document.querySelectorAll('.card').forEach((card) => card.remove());
    //    const cards = document.querySelector('.form-select')
    data.forEach((dish) => {
      const card = `
        <div class="card m-3 p-2">
        <div class="favorite" />
        <img src=${dish.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <a href=/dishes/${dish.id} class="card-text">${dish.name}</a>
          <p>Время приготовления: ${Math.floor(dish.time / 60)} м</p>
          <br />
          <p>Количество ингридиентов: ${dish.ingredientCount}</p>
        </div>
      </div>`;
      selectForm.insertAdjacentHTML('afterend', card);
    });
  }
});
