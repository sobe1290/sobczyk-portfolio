import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from "./components/NavBar";
import AboutMeCard from './components/AboutMeCard';
import Footer from './components/Footer';
//ToDo: Make AllProjects replace AboutMeCard on Click of link
import AllProjects from './components/AllProjects';
import React, {useState} from 'react';
import Resume from './components/Resume';



function App() {
  const [currentPage, setCurrentPage] = useState('aboutme');
  const renderPage = () => {

    

    if (currentPage === 'aboutme') {
      return <AboutMeCard />;
    }
    if (currentPage === 'portfolio') {
      return <AllProjects />;
    } 
    if (currentPage === 'contact') {
      return <AboutMeCard />;
    }
    if (currentPage === 'resume') {
      return <Resume />;
    }else
    return <AboutMeCard />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (

    <div className="App">
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />      
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
