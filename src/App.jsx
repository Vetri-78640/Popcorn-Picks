import './CSS/App.css'
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import NavBar from './MovieComponents/NavBar';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from "./context/MovieContext";
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;