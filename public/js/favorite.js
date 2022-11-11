const dishes = document.querySelector('.js-favorite');

dishes?.addEventListener('click', async (event) => {
  if (event.target.classList.contains('like')) {
    if (!event.target.classList.contains('like-on')) {
      const response = await fetch(`/dishes/${event.target.id}`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: event.target.id }),
      });
      const data = await response.json();
      if (data.message === 'success') {
        event.target.classList.toggle('like-on');
      }
    } else {
      const response = await fetch(`/dishes/${event.target.id}`, {
        method: 'delete',
      });
      const data = await response.json();
      if (data.message === 'dislike') {
        event.target.classList.toggle('like-on');
      }
    }
  }
});
