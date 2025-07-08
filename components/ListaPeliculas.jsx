import { Row } from "react-bootstrap";
import CardPelicula from "./CardPelicula";

const ListaPeliculas = ({ peliculas }) => {
    return (
        <section className="my-3 lista-peliculas d-flex flex-column">
            <h2 className="my-3 text-light text-center">Lista de Películas</h2>
            <div className="w-100 row mx-auto">
                {
                    peliculas.map((pelicula , indice) => (
                        <div key = {indice} className="col-md-4 mb-3">
                            <CardPelicula pelicula = {pelicula}></CardPelicula>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default ListaPeliculas;