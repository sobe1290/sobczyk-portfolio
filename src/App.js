import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from "./components/NavBar";
import AboutMeCard from './components/AboutMeCard';
import Footer from './components/Footer';

function App() {
  return (

    <div className="App">
      <NavBar />
      <AboutMeCard />
      <Footer />
    </div>
  );
}

export default App;
