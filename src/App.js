import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Header from "./Components/Header";
import Movies_Details from "./Components/Movies_Details";
import Footer from "./Components/Footer";



function App() {
  return (
    <div className="App">

      <Nav />

      <Movies_Details />
      <Footer />
    </div>
  );
}

export default App;
