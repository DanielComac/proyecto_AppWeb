import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import './App.css';
import foto from './foto.jpeg';
import Pdf from './alumno'; 
import GoogleMap from './GoogleMap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tarjeta from './tarjeta';
import logo from './logo.png';
import Example from './carrusel';
import mockup from './mockup.png'
import GoogleLogin from 'react-google-login';
import Login from './login';
import { GoogleLogout } from 'react-google-login';
import { AiFillGithub } from 'react-icons/ai';


function App() {
  return (
      <div class="bg-5">
        <Router>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/compean">Login</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                  <Nav.Link as={Link} to='/nombre'>Mi Nombre</Nav.Link>
                  <Nav.Link as={Link} to="/utd">Mi Universidad</Nav.Link>
                  <Nav.Link as={Link} to="/carrera">Mi carrera</Nav.Link>
                  <Nav.Link as={Link} to="/logo">Logo</Nav.Link>
                  <Nav.Link as={Link} to="/foto">Foto</Nav.Link>
                  <Nav.Link as={Link} to="/alumno">Curriculum</Nav.Link>
                  <Nav.Link as={Link} to="/mapa">Mi ubicación</Nav.Link>
                  <Nav.Link as={Link} to="/galeria">Galeria</Nav.Link>
                  <Nav.Link as={Link} to="/mockup">Mockup</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          <Switch> 
          <Route path="/compean">
              <center><h1 class="textonombre1-1">Login</h1></center>
              <Login />
            </Route>
            <Route path="/home" exact>
              <center><h1 class="animacion">Home</h1>
              <div className='tarjeta'>
                <Tarjeta />
              </div>
              <div>
              <a href="https://github.com/" target="_blank"><button className='github' role="button" ><AiFillGithub /> Ir a mi Github</button></a>
              </div>
              </center>
            </Route>
            <Route path="/nombre">
              <center><h1 class="textonombre1">Mi nombre es:</h1></center>
              <center><h1 class="textonombre2">G. Daniel Compean Macias</h1></center>
            </Route>
            <Route path="/utd">
              <div class="container">
                <center><h1 class="textoutd1">Mi universidad es:</h1></center>
                <center><h1 class="textoutd2">Universidad Tecnológica de Durango</h1></center>
              </div>
            </Route>
            <Route path="/carrera">
              <center><h1 class="textocarrera">Mi carrera es:</h1></center>
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 text-center">
                      <h3 class="animate-charcter">Desarrollo y gestion de SW multiplataforma</h3>
                    </div>
                  </div>
                </div>
            </Route>
            <Route path="/logo">
              <center>
                <img src={logo} className="logo"></img>
              </center>
            </Route>
            <Route path="/foto">
              <center>
                <div class="responsive">
                  <div class="gallery">
                    <img src={foto} alt="Cinque Terre" width="600" height="400" />
                      <div class="desc">Los obstáculos en la vida nos hacen madurar, los éxitos nos hacen reflexionar, y los fracasos nos hacen crecer</div>
                  </div>
                </div>
              </center>
            </Route>
            <Route exact path="/alumno" Component={Pdf}>
              <center>
                  <Pdf />
              </center>
            </Route>
            <Route exact path="/mapa">
              <div>
                <GoogleMap />
              </div>
            </Route>
            <Route exact path="/galeria">
              <div>
                <Example />
              </div>
            </Route>
            <Route exact path="/mockup">
              <div>
                <img src={mockup} />
              </div>
            </Route>
            
          </Switch>
        </Router>
      </div>  
        
    );
}

export default App;
