const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');


/* MENU MOBILE */

if (menuBtn && nav) {

  menuBtn.addEventListener('click', () => {

    nav.style.display =
      nav.style.display === 'flex'
        ? 'none'
        : 'flex';

  });


  document
    .querySelectorAll('nav a')
    .forEach(link => {

      link.addEventListener('click', () => {

        if (window.innerWidth <= 800) {
          nav.style.display = 'none';
        }

      });

    });

}


/* BUSCA DE PRODUTORES */

const search =
  document.getElementById('search');

const producers = [
  ...document.querySelectorAll('.producer')
];


if (search) {

  search.addEventListener('input', () => {

    const term =
      search.value
        .toLowerCase()
        .trim();


    producers.forEach(card => {

      card.style.display =
        card.dataset.search
          .toLowerCase()
          .includes(term)
            ? 'flex'
            : 'none';

    });

  });

}


/* FORMULÁRIO IG SITES */

const siteForm =
  document.getElementById('siteForm');


if (siteForm) {

  siteForm.addEventListener(
    'submit',
    event => {

      event.preventDefault();


      const nome =
        document
          .getElementById('nome')
          .value
          .trim();


      const negocio =
        document
          .getElementById('negocio')
          .value
          .trim();


      const mensagem =
        `Olá! Vi este site demonstrativo da Feira Local e quero um site como este.\n\nMeu nome: ${nome}\nMeu negócio: ${negocio}`;


      window.open(

        `https://wa.me/5541995229213?text=${encodeURIComponent(mensagem)}`,

        '_blank'

      );

    }

  );

}
