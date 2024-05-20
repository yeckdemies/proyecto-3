const search_queries = [
  'Paisajes naturales',
  'Gatos divertidos',
  'Arquitectura moderna',
  'Comida deliciosa',
  'Arte abstracto',
  'Playas paradisíacas',
  'Autos deportivos',
  'Animales salvajes',
  'Moda de verano',
  'Cielos estrellados',
  'Ciudades famosas',
  'Flores exóticas',
  'Montañas nevadas',
  'Bebés adorables',
  'Frutas y verduras',
  'Espacio exterior',
  'Deportes extremos',
  'Personajes de cine',
  'Eventos históricos',
  'Festividades culturales'
];

const getElement = () => {
  const randomIndex = Math.floor(Math.random() * search_queries.length);
  return search_queries[randomIndex];
};

const findButton = (valueInput, nodoPadre, divEliminar, input) => {
  nodoPadre.removeChild(divEliminar);
  input.value = valueInput;
  input.click();
  input.focus();
  const inputEvent = new Event('input', {
    bubbles: true,
    cancelable: true
  });

  input.dispatchEvent(inputEvent);
};

export { getElement, findButton };
