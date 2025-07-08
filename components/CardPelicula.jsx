import { Card , ListGroup } from 'react-bootstrap';

function CardPelicula() {
  return (
    <Card className='card'>
      <Card.Body>
        <Card.Title className='text-light'>Título</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='fw-bold'>Género</ListGroup.Item>
        <ListGroup.Item className='fw-bold'>Descripción</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardPelicula;