import { Button } from '../Button/Button';
import './Card.css';

export const Card = (nodoPadre, url, clase, titulo = '', textoBoton = '') => {
  const cardHTML = document.createElement('div');
  cardHTML.className = clase;

  if (url) {
    const img = document.createElement('img');
    img.src = url;
    cardHTML.appendChild(img);
  }

  const divOverlay = document.createElement('div');
  const infoCard = document.createElement('h2');

  divOverlay.className = 'overlay';
  infoCard.innerText = titulo;

  divOverlay.append(infoCard);
  Button({ padre: divOverlay, texto: textoBoton });

  cardHTML.append(divOverlay);
  nodoPadre.appendChild(cardHTML);
};
