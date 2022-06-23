import { useEffect, useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    fetch('http://localhost:8080/movies')
    .then(res => res.json())
    .then(data => setMovies(data))
  }, [])

  const searchHandler = (e) => {
    setSearchInput(e.target.value)
  };
  let filteredResults = movies.filter(movie => {
    return movie.title.toUpperCase().includes(searchInput.toUpperCase())
  })

  return (
    <div>
      <h1>Elvis Presley's Movies</h1>
      <div>
        <input type="text" placeholder="Search" onKeyUp={(e) => searchHandler(e)} />
        {filteredResults.map(movie => (
          <div>
            <p>{movie.title}, {movie.release_year}</p>
            <img src={movie.cover} alt={movie.title} height='500px'/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieList