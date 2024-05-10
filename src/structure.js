import './structureStyle.css';
import { Button } from './Components/Button/Button';
import { Input } from './Components/Input/Input';

const createHeader = (padre) => {
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');
  const logo = document.createElement('img');
  const a = document.createElement('a');

  a.href = '#';
  logo.className = 'logo';
  logo.src = './public/images/logoPinteres.png';

  a.appendChild(logo);
  header.appendChild(a);

  Button({
    padre: header,
    texto: `Explorar <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 1L7 6L13 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  });
  Input({
    padre: header,
    placeholder: 'Encuentra ideas sobre cenas fáciles, moda, etc.'
  });
  Button({ padre: header, texto: 'Iniciar Sesión' });
  Button({ padre: header, texto: 'Registrarse', clase: 'buttonRegister' });
  Button({
    padre: header,
    texto: `<svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 1L7 6L13 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    clase: 'buttonFlecha'
  });

  padre.append(header, main, footer);
};

const createMain = (padre) => {
  const h1 = document.createElement('h1');
  const section1 = document.createElement('section');
  const section2 = document.createElement('section');
  const section3 = document.createElement('section');
  
  section1.className = 'section1';
  section2.className = 'section2';
  section3.className = 'section3';

  h1.innerHTML = 'Explorar lo mejor de Pinterest';
  padre.append(h1, section1, section2, section3);
};

export { createHeader, createMain };
