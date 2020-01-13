import { SHOW_MOVIE, ADD_FAVORITE, REMOVE_FAVORITE } from './actions';

const getMovie = (title) => dispatch => {

    const decoder = new TextDecoder("utf-8");

    fetch(
        `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${title}`,
        {
            method: "GET",
            headers: {
                "x-rapidapi-host":
                    "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                "x-rapidapi-key": "54c8ed5f3amsh4ebdfcbc69d85a8p126f77jsn73b94ea62069"
            }
        }
    )
        .then(response => {
            response.body
                .getReader()
                .read()
                .then(({ value, done }) => {
                    return dispatch({
                        type: SHOW_MOVIE,
                        movie: JSON.parse(decoder.decode(value))
                    })
                })
                .catch(() => {
                    alert("This movie does not exist");
                });
        })

        .catch(() => {
            console.log("This movie does not exist");
        });
}

const showFavMovie = (movie) => ({
    type: SHOW_MOVIE,
    movie
})

const addToFavorites = (favorite) => ({
    type: ADD_FAVORITE,
    favorite: favorite
})

const removeFromFavorites = (id) => ({
    type: REMOVE_FAVORITE,
    id
})

export { getMovie, addToFavorites, removeFromFavorites, showFavMovie };