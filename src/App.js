import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Header from "./Components/Header";
import Movies_Details from "./Components/Movies_Details";
import Nav from "./Components/Nav";


function App() {
  return (
    <div className="App">

      <Nav />

      <Movies_Details />

    </div>
  );
}

export default App;
