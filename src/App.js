import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import { Route, Routes } from 'react-router';
function App() {
  return (
    <div className="App">

        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='movie/:id' element={<Movie/>}></Route>
          <Route path='movies/:type' element={<MovieList/>}></Route>
        </Routes>
     
    </div>
  );
}

export default App;
