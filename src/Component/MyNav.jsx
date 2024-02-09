import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNav = () => (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#home" className="d-flex align-items-center ">
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAY91nlNfDuZ1PfEurTD16vlNH1GAWECTMg&usqp=CAU"
          width="80"
          height="80"
          className="d-inline-block align-top"
        />{' '}
        <h3>Il Meteo</h3>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className=" flex-grow-0 " id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Previsioni </Nav.Link>
          <Nav.Link href="#link">Situazione</Nav.Link>
          <Nav.Link href="#link">Mappe</Nav.Link>
          <Nav.Link href="#link">Neve</Nav.Link>
          <Nav.Link href="#link">Venti e Mari</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default MyNav;
