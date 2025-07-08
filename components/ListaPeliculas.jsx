import { ListGroup } from "react-bootstrap";
import CardPelicula from "./CardPelicula";

const ListaPeliculas = () => {
    return (
        <section className="my-3 lista-peliculas">
            <h2 className="my-3 text-light text-center">Lista de Películas</h2>
            <ListGroup>
                <CardPelicula></CardPelicula>
            </ListGroup>
        </section>
    );
};

export default ListaPeliculas;