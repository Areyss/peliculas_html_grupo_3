import Header from '../componentes/Header';
import Pelicula from '../componentes/Pelicula';
import peliculas from'../json/peliculas.json';

function MoviePage(){
    return(
        <>
        <Header/>
        {peliculas.map(peli =>
          <Pelicula
            titulo={peli.titulo}
            img={peli.img}
            duracion={peli.duracion}
            sinopsis={peli.sinopsis}
            genero={peli.genero}
          ></Pelicula>
        )}
        </>
        
    );

}
export default MoviePage;