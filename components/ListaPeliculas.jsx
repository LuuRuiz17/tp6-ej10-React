import { ListGroup } from "react-bootstrap";
import CardPelicula from "./CardPelicula";

const ListaPeliculas = ({ peliculas }) => {
    return (
        <section className="my-3 lista-peliculas">
            <h2 className="my-3 text-light text-center">Lista de Películas</h2>
            <ListGroup>
                {
                    peliculas.map((pelicula , indice) => (
                        <CardPelicula key = {indice} pelicula = {pelicula}></CardPelicula>
                    ))
                }
            </ListGroup>
        </section>
    );
};

export default ListaPeliculas;