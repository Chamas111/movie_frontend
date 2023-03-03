import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Movies_Details from './Components/Movies_Details';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import AddMovie from './Components/AddMovie';
import UpdateMovie from './Components/UpdateMovie';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='/movies/new'
          element={<AddMovie />}
        />
        <Route
          path='/movies/:movie_id'
          element={<Movies_Details />}
        />
        <Route
          path='/movies/:movie_id/update'
          element={<UpdateMovie />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
