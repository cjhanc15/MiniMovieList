import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieList from "./MovieList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MovieList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
