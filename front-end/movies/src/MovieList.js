import { useEffect, useState } from "react";

const MovieList = () => {
  //Hooks
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('')
  //Fetch
  useEffect(() => {
    fetch('http://localhost:8080/movies')
    .then(res => res.json())
    .then(data => setMovies(data))
  }, [])
  //Helper Functions
  const searchHandler = (e) => {
    setSearchInput(e.target.value)
  };
  let filteredResults = movies.filter(movie => {
    return movie.title.toUpperCase().includes(searchInput.toUpperCase())
  })

  const addMovie = (title, genre, release_year, cover) => {
    const newMovie = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        title: title,
        genre: genre,
        release_year: parseFloat(release_year),
        cover: cover
      })
    }
    fetch('http://localhost:8080/movies', newMovie)
    .then(res => res.json())
    .then(data => {
      setMovies(data);
    })
  }

  const deleteMovie = (id) => {
    const deletedMovie = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    }
    fetch('http://localhost:8080/movies', deletedMovie)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let newList = {...movies};

      setMovies(newList);
    })
  }

  return (
    <div>
      <h1>Elvis Presley's Movies</h1>
      <div>
        <input type="text" placeholder="Search" onKeyUp={(e) => searchHandler(e)} />
        {filteredResults.map(movie => (
          <div>
            <p>{movie.title}, {movie.release_year}</p>
            <img src={movie.cover} alt={movie.title} height='500px'/>
            <button onClick={deleteMovie(movie.id)}>Delete</button>
          </div>
        ))}
      </div>
      <h3>Not finding a movie? Add it here!</h3>
      <div>
        <input id='title' placeholder='Title'/>
        <input id='genre' placeholder='Genre'/>
        <input id='release_year' placeholder='Year Released'/>
        <input id='cover' placeholder='Cover'/>
        <button onClick={() => {
          addMovie(
            document.getElementById('title').value,
            document.getElementById('genre').value,
            document.getElementById('release_year').value,
            document.getElementById('cover').value,
          )
        }}>Add Movie</button>
      </div>          
    </div>
  )
}

export default MovieList