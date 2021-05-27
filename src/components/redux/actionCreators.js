import {
  SHOW_MOVIE,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_LOADER,
} from './actions';

const getMovie = (title) => (dispatch) => {
  fetch(
    `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${title}`,
    {
      headers: {
        'x-rapidapi-host':
          'imdb-internet-movie-database-unofficial.p.rapidapi.com',
        'x-rapidapi-key': '54c8ed5f3amsh4ebdfcbc69d85a8p126f77jsn73b94ea62069',
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      if (!res.id) throw new Error('This movie does not exist');
      dispatch({
        type: SHOW_MOVIE,
        movie: res,
      });
    })
    .catch((error) => {
      alert(error.message);
    });
};

const showFavMovie = (movie) => ({
  type: SHOW_MOVIE,
  movie,
});

const addToFavorites = (favorite) => ({
  type: ADD_FAVORITE,
  favorite: favorite,
});

const removeFromFavorites = (id) => ({
  type: REMOVE_FAVORITE,
  id,
});

const setLoader = () => ({
  type: SET_LOADER,
});

export {
  getMovie,
  addToFavorites,
  removeFromFavorites,
  showFavMovie,
  setLoader,
};
