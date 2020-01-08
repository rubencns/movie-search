/* const [film, setFilm] = useState({
    film: ""
  });

  useEffect(() => {
    const decoder = new TextDecoder("utf-8");
    fetch(
      "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/titanic",
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
            console.log(JSON.parse(decoder.decode(value)));
          });
      })

      .catch(err => {
        console.log(err);
      });
  });

  return ""; */
