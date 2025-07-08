import { Card , ListGroup } from 'react-bootstrap';

function CardPelicula({pelicula}) {
  return (
    <Card className='card'>
      <Card.Body>
        <Card.Title className='text-light'>{pelicula.nombre}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><span className='fw-bold'>Género:</span> {pelicula.genero}</ListGroup.Item>
        <ListGroup.Item><span className='fw-bold'>Descripción:</span> {pelicula.descripcion}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardPelicula;