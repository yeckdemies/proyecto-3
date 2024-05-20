import './structureStyle.css';
import { Button } from './Components/Button/Button';
import { Input } from './Components/Input/Input';
import { Card } from './Components/Card/Card';
import { obtenerDatos } from './utils/apiConection';
import { getElement } from './utils/functions';
import { CardFind } from './Components/CardFind/CardFind';

const createHeader = (padre) => {
  const logo = document.createElement('img');
  const a = document.createElement('a');

  a.href = '#';
  logo.className = 'logo';
  logo.src = './public/images/logoPinteres.png';

  a.appendChild(logo);
  padre.appendChild(a);

  Button({
    padre: padre,
    texto: `Explorar <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 1L7 6L13 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    id: 'explorar'
  });
  Input({
    padre: padre,
    placeholder: 'Encuentra ideas sobre cenas fáciles, moda, etc.',
    id: 'busqueda'
  });
  Button({ padre: padre, texto: 'Iniciar Sesión', id: 'sesion' });
  Button({
    padre: padre,
    texto: 'Registrarse',
    clase: 'buttonRegister',
    id: 'registro'
  });
  Button({
    padre: padre,
    texto: `<svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 1L7 6L13 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    clase: 'buttonFlecha',
    id: 'flecha'
  });

  let debounceTimeout;
  busqueda.addEventListener('input', (e) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      CardFind(app, e.target.value);
    }, 1000);
  });
};

const createMain = (padre) => {
  const section1 = document.createElement('section');
  const section2 = document.createElement('section');
  const gridArticle1Section2 = document.createElement('article');
  const gridArticle2Section2 = document.createElement('article');

  section1.className = 'section1';
  section2.className = 'section2';

  gridArticle1Section2.className = 'gridArticle1Section2';
  gridArticle2Section2.className = 'hidden gridArticle2Section2 ';

  /* Section 1 */
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Explorar lo mejor de Pinterest';

  obtenerDatos({ description: 'Gatos', pages: 1, items: 1 })
    .then((fotos) => {
      Card(
        section1,
        fotos[0].urls.regular,
        'card',
        'Colección De Gatos',
        'Ver más'
      );
    })
    .catch((error) => {
      console.error('Error al obtener datos: ', error);
    });

  obtenerDatos({ description: 'Croché', pages: 1, items: 1 })
    .then((fotos) => {
      Card(section1, fotos[0].urls.regular, 'card', 'Aprende Croché', 'Hacer');
    })
    .catch((error) => {
      console.error('Error al obtener datos: ', error);
    });

  obtenerDatos({ description: 'Jardinería', pages: 1, items: 1 })
    .then((fotos) => {
      Card(
        section1,
        fotos[0].urls.regular,
        'card',
        'Prueba La Jardinería',
        'Probar'
      );
    })
    .catch((error) => {
      console.error('Error al obtener datos: ', error);
    });

  padre.append(h1, section1);

  /* Section 2*/
  const h3 = document.createElement('h3');
  h3.innerHTML = 'Descubre intereses';

  obtenerDatos({ description: 'Animals', pages: 1, items: 1 })
    .then((fotos) =>
      Card(
        gridArticle1Section2,
        fotos[0].urls.regular,
        'card cardSmall',
        'Animales'
      )
    )
    .catch((error) => console.error('Error al obtener datos: ', error));

  obtenerDatos({ description: 'Art', pages: 1, items: 1 })
    .then((fotos) =>
      Card(
        gridArticle1Section2,
        fotos[0].urls.regular,
        'card cardSmall',
        'Arte'
      )
    )
    .catch((error) => console.error('Error al obtener datos: ', error));

  obtenerDatos({ description: 'Beauty', pages: 1, items: 1 })
    .then((fotos) =>
      Card(
        gridArticle1Section2,
        fotos[0].urls.regular,
        'card cardSmall',
        'Belleza'
      )
    )
    .catch((error) => console.error('Error al obtener datos: ', error));

  obtenerDatos({ description: 'Design', pages: 1, items: 1 })
    .then((fotos) =>
      Card(
        gridArticle1Section2,
        fotos[0].urls.regular,
        'card cardSmall',
        'Diseño'
      )
    )
    .catch((error) => console.error('Error al obtener datos: ', error));

  obtenerDatos({ description: 'Crafts and DIY', pages: 1, items: 1 })
    .then((fotos) =>
      Card(
        gridArticle1Section2,
        fotos[0].urls.regular,
        'card cardSmall',
        'Manualidades Y Bricolaje'
      )
    )
    .catch((error) => console.error('Error al obtener datos: ', error));

  obtenerDatos({ description: 'food and drink', pages: 1, items: 1 })
    .then((fotos) =>
      Card(
        gridArticle1Section2,
        fotos[0].urls.regular,
        'card cardSmall',
        'Comida Y Bebida'
      )
    )
    .catch((error) => console.error('Error al obtener datos: ', error));

  obtenerDatos({ description: 'Home decoration', pages: 1, items: 1 })
    .then((fotos) =>
      Card(
        gridArticle1Section2,
        fotos[0].urls.regular,
        'card cardSmall',
        'Decoración Del hogar'
      )
    )
    .catch((error) => console.error('Error al obtener datos: ', error));

  obtenerDatos({ description: 'Men fashion', pages: 1, items: 1 })
    .then((fotos) =>
      Card(
        gridArticle1Section2,
        fotos[0].urls.regular,
        'card cardSmall',
        'Moda Para Hombre'
      )
    )
    .catch((error) => console.error('Error al obtener datos: ', error));

  obtenerDatos({ description: 'Dates', pages: 1, items: 1 })
    .then((fotos) =>
      Card(
        gridArticle1Section2,
        fotos[0].urls.regular,
        'card cardSmall',
        'Citas'
      )
    )
    .catch((error) => console.error('Error al obtener datos: ', error));

  obtenerDatos({ description: 'tatto', pages: 1, items: 1 })
    .then((fotos) =>
      Card(
        gridArticle1Section2,
        fotos[0].urls.regular,
        'card cardSmall',
        'Tatuajes'
      )
    )
    .catch((error) => console.error('Error al obtener datos: ', error));

  section2.append(h3, gridArticle1Section2);
  Button({ padre: section2, texto: 'Más', id: 'mas' });

  padre.appendChild(section2);

  const mas = document.querySelector('#mas');

  if (mas) {
    mas.addEventListener('click', () => {
      mas.classList.toggle('hidden');
      obtenerDatos({ description: 'travel', pages: 1, items: 1 })
        .then((fotos) =>
          Card(
            gridArticle2Section2,
            fotos[0].urls.regular,
            'card cardSmall lastRow',
            'Viajes'
          )
        )
        .catch((error) => console.error('Error al obtener datos: ', error));

      obtenerDatos({ description: 'wedding', pages: 1, items: 1 })
        .then((fotos) =>
          Card(
            gridArticle2Section2,
            fotos[0].urls.regular,
            'card cardSmall lastRow',
            'Boda'
          )
        )
        .catch((error) => console.error('Error al obtener datos: ', error));
      obtenerDatos({ description: 'women fashion', pages: 1, items: 1 })
        .then((fotos) =>
          Card(
            gridArticle2Section2,
            fotos[0].urls.regular,
            'card cardSmall lastRow',
            'Moda Para Mujeres'
          )
        )
        .catch((error) => console.error('Error al obtener datos: ', error));
    });
    section2.append(gridArticle2Section2);
  }
};

export { createHeader, createMain };
