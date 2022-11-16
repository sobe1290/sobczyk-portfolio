import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Patrick Sobczyk</Navbar.Brand>
          <Nav className="me-auto px-5">
            <Nav.Link className={currentPage === 'aboutme' ? 'nav-link active' : 'nav-link'}href="#aboutme" onClick={() => handlePageChange('aboutme')}>About Me</Nav.Link>
            <Nav.Link className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}href="#portfolio" onClick={() => handlePageChange('portfolio')}>Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;