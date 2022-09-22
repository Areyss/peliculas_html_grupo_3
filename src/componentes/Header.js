
function Header(){
    return(
        <header>
        <div className="logo">
            <a href="/">
                <img src="./img/logo.png" alt="logo"/>
                <h1>Cine Online</h1>
                
            </a>
        </div>    
        <div className="nav">
			<li><a href="/">Inicio</a></li>
			<li><a href="#">Generos</a></li>
			<li><a href="/pelicula">Películas</a></li>
			<li><a href="#">Series</a></li>
			<div className="buscador">
      				<input type="search" id="search" />
      				<span className="icon"><i className="fa fa-search"></i></span>
			</div>
		</div>
    </header>
    );
}
export default Header;