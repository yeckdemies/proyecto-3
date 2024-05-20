import './CardFind.css';
import { obtenerDatos } from '../../utils/apiConection';
import { findButton, getElement } from '../../utils/functions';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';

export const CardFind = (nodoPadre, textoBusqueda = 'full') => {
  if (textoBusqueda) {
    const divExistente = nodoPadre.querySelector('.divBusqueda');
    if (divExistente) {
      divExistente.remove();
    }
    const divBusqueda = document.createElement('div');
    divBusqueda.className = 'divBusqueda';

    divBusqueda.innerHTML = '';
    obtenerDatos({ description: textoBusqueda, pages: 1, items: 12 })
      .then((fotos) => {
        if (fotos.length > 0) {
          for (const foto of fotos) {
            Card(divBusqueda, foto.urls.regular, 'cardFlotante');
          }
          nodoPadre.appendChild(divBusqueda);
        } else {
          const existeDivSinResultados =
            nodoPadre.querySelector('.divSinResultados');
          if (existeDivSinResultados) {
            existeDivSinResultados.remove();
          }
          const divSinResultados = document.createElement('div');
          divSinResultados.className = 'divSinResultados';
          const mensaje = document.createElement('p');
          mensaje.innerText = 'No se han encontrado resultados';

          const divButtons = document.createElement('div');
          divButtons.className = 'divButtons';

          Button({ padre: divButtons, texto: getElement(), id: 'busqueda1' });
          Button({ padre: divButtons, texto: getElement(), id: 'busqueda2' });
          Button({ padre: divButtons, texto: getElement(), id: 'busqueda3' });

          divSinResultados.append(mensaje, divButtons);
          nodoPadre.appendChild(divSinResultados);

          const button1 = document.getElementById('busqueda1');
          const button2 = document.getElementById('busqueda2');
          const button3 = document.getElementById('busqueda3');
          const input = document.querySelector('input');

          button1.addEventListener('click', (e) => {
            findButton(e.target.innerHTML, nodoPadre, divSinResultados, input);
          });

          button2.addEventListener('click', (e) => {
            findButton(e.target.innerHTML, nodoPadre, divSinResultados, input);
          });

          button3.addEventListener('click', (e) => {
            findButton(e.target.innerHTML, nodoPadre, divSinResultados, input);
          });
        }
      })
      .catch((error) => {
        console.error('Error al obtener datos: ', error);
      });
  }
};
