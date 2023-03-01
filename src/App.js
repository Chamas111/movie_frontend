
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Header from "./Components/Header";
import Movies_Details from "./Components/Movies_Details";
import Footer from "./Components/Footer";



function App() {
  return (
    <div className='App'>
      <Nav />
      <Home />
      <Movies_Details />
      <Footer />
    </div>
  );
}

export default App;
