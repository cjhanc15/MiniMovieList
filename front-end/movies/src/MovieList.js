import { useEffect, useState } from "react"

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/movies')
    .then(res => res.json())
    .then(data => setMovies(data))
  }, [])

  console.log(movies)
  return (
    <div>
          <h1>Elvis Presley's Movies</h1>
    <div>
      {movies.map(movie => (
        <div>
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default MovieList