import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import { Route, Routes } from 'react-router-dom';
import MovieDesc from './components/MovieDesc';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<MovieList></MovieList>}></Route>
        <Route path='/:id' element={<MovieDesc></MovieDesc>}></Route>
      </Routes>
    </div>
  );
}

export default App;
