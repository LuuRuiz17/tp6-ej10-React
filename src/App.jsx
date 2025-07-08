import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar , Nav , Container } from 'react-bootstrap';
import FormPeliculas from '../components/FormPeliculas';

function App() {

  return (
    <>
      <header>
        <Navbar expand="lg" className="navbar">
          <Container>
            <Navbar.Brand className='text-light' href="#home">Películas</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className='text-light' href="#home">Inicio</Nav.Link>
                <Nav.Link className='text-light' href="#link">Enlaces</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main className='color-loop container'>
        <h1 className='text-center text-light my-3'>Alta de Películas</h1>
        <FormPeliculas></FormPeliculas>
      </main>
      <footer className='footer py-4 text-center text-light'>
        &copy; Todos los derechos reservados
      </footer>
    </>
  )
}

export default App
