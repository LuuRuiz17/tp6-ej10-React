import { useState , useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import ListaPeliculas from '../components/ListaPeliculas';

function FormPeliculas() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const peliculasLocalStorage = JSON.parse(localStorage.getItem('peliculas')) || [];
    const [peliculas, setPelicula] = useState(peliculasLocalStorage)

    useEffect(() => {
        if (peliculas.length > 0) {
            localStorage.setItem('peliculas', JSON.stringify(peliculas));
        }
    }, [peliculas]);

    const agregarPelicula = (dato) => {
        const pelicula = {
            nombre: dato.nombre,
            descripcion: dato.descripcion,
            genero: dato.genero
        }
        setPelicula([...peliculas, pelicula]);
        reset();
    }

    return (
        <>
            <Form className='p-3 rounded rounded-3 form' onSubmit={handleSubmit(agregarPelicula)}>
                <Form.Group className="mb-2 text-light" controlId="formNombre">
                    <Form.Label className='fw-bold'>Nombre</Form.Label>
                    <Form.Control className='form-input' type="text" placeholder="Ingresa el nombre de la película" {...register('nombre', {
                        required: 'Este campo es obligatorio',
                        minLength: {
                            value: 2,
                            message: 'El nombre de la película debe tener al menos 2 caracteres.'
                        },
                        maxLength: {
                            value: 30,
                            message: 'El nombre de la película debe tener hasta 30 caracteres.'
                        }
                    })} />
                    <Form.Text className="text-danger my-1 fw-400">
                        {errors.nombre?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-2 text-light fw-bold" controlId="formDescripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa la descripción de la película" {...register('descripcion', {
                        required: 'Este campo es obligatorio',
                        minLength: {
                            value: 10,
                            message: 'La descripción debe tener al menos 8 caracteres.'
                        },
                        maxLength: {
                            value: 150,
                            message: 'La descripción debe tener hasta 150 caracteres.'
                        }
                    })} />
                </Form.Group>
                <Form.Text className="text-danger my-1">
                    {errors.descripcion?.message}
                </Form.Text>
                <Form.Group className="mb-2 text-light fw-bold" controlId="formGenero">
                    <Form.Label>Género</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa el género de la película" {...register('genero', {
                        required: 'Este campo es obligatorio',
                        minLength: {
                            value: 3,
                            message: 'El género debe tener al menos 3 caracteres.'
                        },
                        maxLength: {
                            value: 15,
                            message: 'El género debe tener hasta 15 caracteres.'
                        }
                    })} />
                </Form.Group>
                <Form.Text className="text-danger my-1">
                    {errors.descripcion?.message}
                </Form.Text>
                <div className="d-flex">
                    <button className='ms-auto btn-form' variant="primary" type="submit">
                        Añadir
                    </button>
                </div>
            </Form>
            <ListaPeliculas peliculas = {peliculas}></ListaPeliculas>
        </>

    );
}

export default FormPeliculas;