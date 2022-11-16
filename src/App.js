import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from "./components/NavBar";
import AboutMeCard from './components/AboutMeCard';
import Footer from './components/Footer';
//ToDo: Make AllProjects replace AboutMeCard on Click of link
import AllProjects from './components/AllProjects';

function App() {
  return (

    <div className="App">
      <NavBar />
      <AllProjects />
      <Footer />
    </div>
  );
}

export default App;
