import React, {useState, useEffect} from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { gapi } from 'gapi-script';
import './App.css';
import FacebookLogin from 'react-facebook-login';



function Login() {

  const key_login = "297235352471-0ol76t86drndf1hnr0a1erjlnkcc0r31.apps.googleusercontent.com";

  const [user, setUser] = useState({});
  
  useEffect(() => {
    const start = () => {
      gapi.Auth2.init({
        clientId: key_login,
      });
    }
    gapi.load("client:auth2", start)
  }, [])

    const logeado_exito = (respuesta_exitosa) => 
      {
         console.log("LOGUEADO CON ÉXITO:",respuesta_exitosa.profileObj);
         setUser(respuesta_exitosa.profileObj);
         Swal.fire({
          icon: 'success',
          text: 'Ingresado con éxito',
          footer: '<a href=""></a>'
        })
      }
    const fallo_login = (res) => 
      {
          console.log("FALLO EN EL ACCESO:",res.profileObj);
          Swal.fire({
            icon: 'error',
            text: 'Algo salió mal',
            footer: '<a href=""></a>'
          })
      }
      const Logout=()=>{
         console.log("SESIÓN TERMINADA COMPEAN MACÍAS");
         Swal.fire({
          icon: 'success',
          text: 'Sesión cerrada con éxito',
          footer: '<a href=""></a>'
        })         
         
       }  

       const [name, setName] = useState('');
       const [email, setEmail] = useState('');
       const [picture, setPicture] = useState('');

       //login facebook
      const responseFacebook = (respuesta_correcta) => {
        console.log(respuesta_correcta);
        setName(respuesta_correcta.name);
        setEmail(respuesta_correcta.email);
        setPicture(respuesta_correcta.picture.data.url);

        Swal.fire({
          icon: 'success',
          text: 'Ingresado con éxito',
          footer: '<a href=""></a>'
        })
      }
  
   return(
        <center> 
          
          <div className='div-login'>
            <hr className='mt-4'></hr>

              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control type="text" placeholder="Ingresa tu usuario" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Recuérdame" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <br></br><br></br>
                <Form.Text className="text-muted">
                  ¿No eres usuario? <Link>Registrate</Link>
                </Form.Text>
              </Form>
              <hr className='mt-4'></hr>
          </div>
          <Form.Text>
            O ingresa con:
          </Form.Text>
          <div className='btn-login'>
              <GoogleLogin
                clientId={key_login}
                onSuccess={logeado_exito}
                onFailure={fallo_login}
                buttonText="INGRESAR"
                cookiePolicy={"single_host_origin"}
              />
          </div>
          <div className='btn-login'>
            <div className='Login_face'>
              <center>
              <FacebookLogin
                appId="886156322600838"
                autoLoad={false}
                fields="name,email,picture"       
                callback={responseFacebook}
                size="small" 
                icon="fa-facebook"
                />    
                </center>
            </div>    
          </div>
          <div className="center">
            <h1>CREDENCIALES DEL USUARIO DE GOOGLE:</h1>
            
 
            <div class={user ? "profile" : "hidden"}>
              <img src={user.imageUrl} alt=""/>
              <h3>{user.name}</h3>
              <h3>{user.email}</h3>           

            </div>
            <GoogleLogout
                clientId="297235352471-0ol76t86drndf1hnr0a1erjlnkcc0r31.apps.googleusercontent.com"
                buttonText={"CERRAR SESIÓN"}
                onLogoutSuccess={Logout}
            />  
          </div>

          <div className="center">
            <h1>CREDENCIALES DEL USUARIO DE FACEBOOK:</h1>
            <div>
              <img src={picture} alt=""/>
              <h3>{name}</h3>
              <h3>{email}</h3>           

            </div>
          </div>
      </center>    
   )   
}      
export default Login;