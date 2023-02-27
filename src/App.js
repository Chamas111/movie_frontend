import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Movies_Details from './Components/Movies_Details';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Home />
      <Movies_Details />
    </div>
  );
}

export default App;
