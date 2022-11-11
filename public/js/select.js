const selectForm = document.querySelector('#ordinary');
selectForm?.addEventListener('change', async (event) => {
  const response = await fetch('/', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key: event.target.value }),
  });
  const data = await response.json();

  if (data) {
    document.querySelectorAll('.card').forEach((card) => card.remove());
    //    const cards = document.querySelector('.form-select')
    const user = document.querySelector('.userId');
    if (!user) {
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
    } else {
      data.forEach((dish) => {
        const str = (user.id == dish['FavoriteDishes.user_id'])
          ? `
          <svg id=${dish.id} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart like like-on" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
         `
          : `
         <svg id=${dish.id} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart like" viewBox="0 0 16 16">
           <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
         </svg>
        `;
        const result = `<div class="card m-3 p-2">${
          str
        }<img src=${dish.img} class="card-img-top " alt="..." />
          <div class="card-body">
            <a href=/dishes/${dish.id} class="card-text ">${dish.name}</a>
            <p>Время приготовления: ${Math.floor(dish.time / 60)} м</p>
            <br />
            <p>Количество ингридиентов: ${dish.ingredient.split('\n').length}</p>
          </div>
          </div>`;
        selectForm.insertAdjacentHTML('afterend', result);
      });
    }
  }
});
