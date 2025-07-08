import { Row } from "react-bootstrap";
import CardPelicula from "./CardPelicula";

const ListaPeliculas = ({ peliculas }) => {
    return (
        <section className="my-3 lista-peliculas">
            <h2 className="my-3 text-light text-center">Lista de Películas</h2>
            <Row>
                {
                    peliculas.map((pelicula , indice) => (
                        <div key = {indice} className="col-md-4 mb-3">
                            <CardPelicula pelicula = {pelicula}></CardPelicula>
                        </div>
                    ))
                }
            </Row>
        </section>
    );
};

export default ListaPeliculas;