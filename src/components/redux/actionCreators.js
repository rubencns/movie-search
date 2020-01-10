import { ADD_MOVIE } from './actions';
import axios from 'axios';

const getMovie = (movieName) => dispatch => {

    const decoder = new TextDecoder("utf-8");

    axios({
        "method": "GET",
        "url": `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${movieName}`,
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
            "x-rapidapi-key": "54c8ed5f3amsh4ebdfcbc69d85a8p126f77jsn73b94ea62069"
        }
    })
        .then(response => {
            response.body
                .getReader()
                .read()
                .then(({ value, done }) => {
                    return dispatch({
                        type: ADD_MOVIE,
                        movie: JSON.parse(decoder.decode(value))
                    })
                });
        })
        .catch((error) => {
            console.log(error)
        })
}

export { getMovie };