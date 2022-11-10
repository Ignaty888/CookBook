document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('https://yummly2.p.rapidapi.com/feeds/list-similarities?limit=18&start=0&id=15-Minute-Baked-Salmon-with-Lemon-9029477&apiFeedType=moreFrom&authorId=Yummly', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a50c09156amsh59c365a08d4a64dp1f925ajsn22a5827ab670',
      'X-RapidAPI-Host': 'yummly2.p.rapidapi.com',
    },
  });

  let data = await response.json();
  data = data.feed.filter((el) => el.type === 'single recipe');

  const seed = [];
  data.forEach((el) => {
    const dish = {
      name: el.display.displayName,
      img: el.display.images[0],
      ingredient: el.content.ingredientLines.map((ing) => ing.ingredient).join('\n'),
      time: el.content.details.totalTimeInSeconds,
      recepi: el.content.preparationSteps.join('\n'),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    seed.push(dish);
  });

  console.log(seed)

  const res = await fetch('/api/dishes', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ seed }),
  });
  const dataRes = await res.json();

  if (dataRes.status === 'success') {
    window.location.assign('/');
  } else {
    document.querySelector('.error-dish').innerHTML = dataRes.message;
  }
});
