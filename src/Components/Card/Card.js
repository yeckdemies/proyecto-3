import { Button } from '../Button/Button';
import './Card.css';

export const Card = (
  nodoPadre,
  url,
  clase,
  titulo = '',
  textoBoton = '',
  description = ''
) => {
  const cardHTML = document.createElement('div');
  cardHTML.className = clase;

  if (url) {
    const img = document.createElement('img');
    img.src = url;
    cardHTML.appendChild(img);
  }

  if (!description) {
    const divOverlay = document.createElement('div');
    const infoCard = document.createElement('h2');

    infoCard.innerText = titulo;
    divOverlay.append(infoCard);

    if (textoBoton) {
      Button({ padre: divOverlay, texto: textoBoton });
      divOverlay.className = 'overlay';
    } else {
      divOverlay.className = 'overlay overlaySmall';
    }
    cardHTML.append(divOverlay);
  } else {
    const cardDescription = document.createElement('div');
    cardDescription.className = 'cardDescription';
    cardDescription.innerText = description;

    cardHTML.appendChild(cardDescription);
  }
  nodoPadre.appendChild(cardHTML);
};
