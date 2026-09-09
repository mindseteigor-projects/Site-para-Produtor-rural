const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 800) nav.style.display = 'none';
  });
});

const search = document.getElementById('search');
const producers = [...document.querySelectorAll('.producer')];

search.addEventListener('input', () => {
  const term = search.value.toLowerCase().trim();
  producers.forEach(card => {
    card.style.display = card.dataset.search.includes(term) ? 'flex' : 'none';
  });
});
