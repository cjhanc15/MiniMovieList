
const MovieList = () => {
  const movies = [
    {title: 'Jailhouse Rock'},
    {title: 'Viva Las Vegas'},
    {title: 'Speedway'},
    {title: 'Blue Hawaii'},
    {title: 'G.I. Blues'},
  ]
  return (
    <div>
      {movies.map(movie => (
        <div>
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  )
}

export default MovieList