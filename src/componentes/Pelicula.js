
function Pelicula(props){
    return(
        <main className="main-peli">
        <div className="conteiner-peli">
            <div className="cabecera-peli">
                <h2>{props.titulo}</h2>
                <p>{props.duracion}</p>
                <div className="compartir">
                    <a href="#">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                        <i className="fa fa-facebook-official" aria-hidden="true"></i>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a> 
                </div>
            </div>
            <div className="pelicula">
                <img src={props.img} alt="portada"/>
                <div className="sinopsis">
                    <h3>Sinopsis</h3>
                    <p>{props.sinopsis}</p>
                    <button>Ver</button>
                    
                </div>
                <div className="rating">
                    <div className="rating-star">
                        <input type="radio" name="Endgame"/>
                        <input type="radio" name="Endgame"/>
                        <input type="radio" name="Endgame" />
                        <input type="radio" name="Endgame"/>
                        <input type="radio" name="Endgame"/>
                        <input type="radio" name="Endgame"/>
                        <input type="radio" name="Endgame"/>
                        <input type="radio" name="Endgame"/>
                        <input type="radio" name="Endgame"/>
                        <input type="radio" name="Endgame"/>
                    </div>
                    <h5>Genero:</h5>
                    <h6>{props.genero}</h6>
                </div>
            </div>
        </div>
        </main>
    );
}
export default Pelicula;