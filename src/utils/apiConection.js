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

/* const obtenerDatos = () => {
  fetch(
    'https://api.unsplash.com/photos/?client_id=Mn7gwdvtKqN2T7XIUPi8SQCegXyqTwROFKWFh9ceuTc'
  )
    .then((res) => res.json())
    .then((photos) => {
      for (const photo of photos) {
        console.log(photo.urls.regular);
      }
    })
    .catch((e) => console.log('Error: ' + e));
}; */
export { obtenerDatos };
