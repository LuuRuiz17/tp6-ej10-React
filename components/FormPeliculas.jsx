import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormPeliculas() {
    return (
        <Form className='p-3 rounded rounded-3 form'>
            <Form.Group className="mb-3 text-light fw-bold" controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control className='form-input' type="text" placeholder="Ingresa el nombre de la película" />
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3 text-light fw-bold" controlId="formDescripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" placeholder="Ingresa la descripción de la película" />
            </Form.Group>
            <Form.Group className="mb-3 text-light fw-bold" controlId="formGenero">
                <Form.Label>Género</Form.Label>
                <Form.Control type="text" placeholder="Ingresa el género de la película" />
            </Form.Group>
            <div className="d-flex">
                <button className='ms-auto btn-form' variant="primary" type="submit">
                    Submit
                </button>
            </div>
        </Form>
    );
}

export default FormPeliculas;