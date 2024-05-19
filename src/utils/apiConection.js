import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'Mn7gwdvtKqN2T7XIUPi8SQCegXyqTwROFKWFh9ceuTc'
});

const obtenerDatos = ({ description = 'full', pages, items }) => {
  return unsplash.search
    .getPhotos({
      query: description,
      page: pages,
      perPage: items
    })
    .then((result) => result.response.results)
    .catch((error) => error);
};

export { obtenerDatos };
