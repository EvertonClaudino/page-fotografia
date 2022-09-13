import './App.css';
import Footer from './layouts/Footer.js';
import NavBar from './layouts/NavBar.js';
import Home from './layouts/Home.js';
import Galeria from './layouts/Galeria';
import QuemSomos from './layouts/QuemSomos';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Galeria />
      <QuemSomos />
      <Footer />
    </div>
  );
}

export default App;
