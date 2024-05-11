import './structureStyle.css';
import { Button } from './Components/Button/Button';
import { Input } from './Components/Input/Input';
import { Card } from './Components/Card/Card';
import { obtenerDatos } from './utils/apiConection';

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
    texto: `Explorar <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 1L7 6L13 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  });
  Input({
    padre: padre,
    placeholder: 'Encuentra ideas sobre cenas fáciles, moda, etc.'
  });
  Button({ padre: padre, texto: 'Iniciar Sesión' });
  Button({ padre: padre, texto: 'Registrarse', clase: 'buttonRegister' });
  Button({
    padre: padre,
    texto: `<svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 1L7 6L13 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    clase: 'buttonFlecha'
  });
};

const createMain = (padre) => {
  const h1 = document.createElement('h1');
  const section1 = document.createElement('section');
  const section2 = document.createElement('section');
  const section3 = document.createElement('section');

  section1.className = 'section1';
  section2.className = 'section2';
  section3.className = 'section3';

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

  h1.innerHTML = 'Explorar lo mejor de Pinterest';
  padre.append(h1, section1, section2, section3);
};

export { createHeader, createMain };
