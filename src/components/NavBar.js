import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm">
       
          <Navbar.Brand className={currentPage === 'aboutme' ? 'nav-link active' : 'nav-link'}href="#aboutme" onClick={() => handlePageChange('aboutme')}>Patrick Sobczyk</Navbar.Brand>
          <Nav className="me-auto px-5">
            <Nav.Link className={currentPage === 'aboutme' ? 'nav-link active' : 'nav-link'}href="#aboutme" onClick={() => handlePageChange('aboutme')}>About Me</Nav.Link>
            <Nav.Link className={currentPage === 'CV' ? 'nav-link active' : 'nav-link'}href="#CV" onClick={() => handlePageChange('CV')}>Curriculum vitae</Nav.Link>
            <Nav.Link className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}href="#resume" onClick={() => handlePageChange('resume')}>Resume</Nav.Link>
          </Nav>
       
      </Navbar>
    </>
  );
}

export default NavBar;