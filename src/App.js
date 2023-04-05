import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from "./components/NavBar";
import AboutMeCard from './components/AboutMeCard';
import Footer from './components/Footer';
import CV from './components/CV';
import React, {useState} from 'react';
import Resume from './components/Resume';




function App() {
  const [currentPage, setCurrentPage] = useState('aboutme');
  const renderPage = () => {

    

    if (currentPage === 'aboutme') {
      return <AboutMeCard />;
    }
    if (currentPage === 'CV') {
      return <CV />;
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
