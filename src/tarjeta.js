import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Tarjeta() {
  return (
    <Card>
      <Card.Body>
        <div className="row">
          <div className="col-md-4">
            <h3>Método Render</h3>
            <p>Todo componente de React, tiene un método Render que es el que se encarga de renderizar en el navegador el HTML correspondiente al componente. Este método se llama automáticamente cuando se crea un componente y cuando el estado del componente se actualiza.</p>
          </div>
          <div className="col-md-4">
            <h3>Método StrictMode </h3>
            <p>StrictMode es una herramienta para destacar problemas potenciales en la aplicacion. Al igual que Fragment StrictMode no renderiza nada en la interfaz de usuario. este modo también activa advertencias y comprobaciones adicionales para sus descendientes</p>
          </div>
          <div className="col-md-4">
            <h3>Método Return</h3>
            <p>Este método es obligatorio en cualquier componente, pues como su nombre lo dice, se utiliza para obtener los elementos finales a visualizar o pintar en el navegador. Debe ser una función pura, es decir, no debe modificar las props, no debe modificar el state ni realizar operaciones del DOM</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;