import { Card, ListGroup } from 'react-bootstrap';

function CardPelicula({ pelicula }) {
  return (
    <Card className="h-100 text-light">
      <Card.Body>
        <Card.Title>{pelicula.nombre}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush flex-grow-1">
        <ListGroup.Item>
          <span className="fw-bold">Género:</span> {pelicula.genero}
        </ListGroup.Item>
        <ListGroup.Item className='flex-grow-1'>
          <span className="fw-bold">Descripción:</span> {pelicula.descripcion}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardPelicula;
