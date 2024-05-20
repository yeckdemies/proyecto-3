import { createHeader, createMain } from './src/structure';
import './style.css';

const miAPP = document.querySelector('#app');

const header = document.createElement('header');
const main = document.createElement('main');

miAPP.append(header, main);

createHeader(header);
createMain(main);

const input = document.querySelector('#busqueda');
input.addEventListener('click', () => {
  const existeOcultar = document.querySelector('.overlayMain');
  if (!existeOcultar) {
    const ocultar = document.createElement('div');
    ocultar.className = 'overlayMain';
    main.appendChild(ocultar);
  }
});

input.addEventListener('blur', () => {
  const ocultar = document.querySelector('.overlayMain');
  const divBusqueda = document.querySelector('.divBusqueda');
  const input = document.querySelector('input');

  input.value = '';

  if (ocultar) {
    main.removeChild(ocultar);
  }
  if (divBusqueda) {
    app.removeChild(divBusqueda);
  }
});
