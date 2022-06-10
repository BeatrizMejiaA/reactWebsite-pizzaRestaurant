import React from 'react';

class App extends React.Component
{
  
  render()
  {
    
    return (
      <div>
        <div id="Welcome">
  
          <nav class="navbar navbar-expand-lg navbar fixed-top  navbar-light bg-light">
          <a class="navbar-brand" href="#Welcome">
              <img src="assets/images/logo1.png" width="50" height="50" class="d-inline-block" alt="" /> A la Gran Pizza!
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#Welcome">Bienvenidos!!!!!</a>
                  </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Restaurant">Restaurante</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Menu">Menu</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Reservation">Reservación</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#OurLocation">Ubicación</a>
                </li>
              
              </ul>
          </div>
        </nav>

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100 img-fluid img-slider" src="assets/images/slider_1.jpg" alt="First slide" />
                <div class="carousel-caption">
                  <h2>Bienvenidos! A La Gran Pizza!</h2>
                <p>...</p>
              </div>
              </div>
              <div class="carousel-item">
                  <img class="d-block w-100 img-fluid img-slider" src="assets/images/slider_2.jpg" alt="Second slide" />
                  <div class="carousel-caption">
                  <h2>Pizza Tradicional Italiana</h2>
                <p>...</p>
              </div>
              </div>
              <div class="carousel-item">
                  <img class="d-block w-100 img-fluid img-slider" src="assets/images/slider_3.jpg" alt="Third slide" />
                  <div class="carousel-caption">
                  <h2>Productos Seleccionados</h2>
                <p>...</p>
              </div>
              </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
          </a>
        </div>
        </div>

        <div class="container">
        <div class="row" id="Restaurant">
            <div class="col navMenu">
                <h2 class="text-center" >~ Restaurante ~</h2>
            </div>
          </div>
          <div class="row bg-light" >
            <div class="col-md-6">
              <h3>Ubicación</h3>
              <p>Gracias por venir! Somos la Mejor Pizza y Comida Italiana en Xela! Sirviendo deliciosa cocina italiana pareparada por el mejor chef. Solo toma unos minutos navegar a través de nuestro sitio web y ver nuestro menú. Esperamos que pronto se una a nosotros para disfrutar de una excelente experiencia culinaria italiana..</p>
              <h5>Una experiencia única</h5>
              <p>Puedes personalizar tu pizza a tu gusto, la única en el área. ¡Contamos con Wifi gratis, personal amable y excelente comida!</p>
            </div>
            <div class="col-md-6" data-aos="fade-up">
              <img class="img-fluid" src="assets/images/location.jpg" />
            </div>
          </div>
          <div class="row bg-light"><br /></div>
          <div class="row bg-light">
            <div class="col-md-6 order-md-1 order-2" data-aos="fade-up">
              <img class="img-fluid " src="assets/images/cuisine.jpg" />
            </div>
            <div class="col-md-6 order-md-12 order-1">
              <h3>Nuestra comida</h3>
              <p>Pizza de Horno de Ladrillo y Cocina Italiana, usando los mejores ingredientes frescos locales.</p>
              <h5>Nuestro chef</h5>
              <p>"La cocina es un lenguaje mediante el cual se puede expresar armonía, felicidad, belleza, poesía, complejidad, magia, humor, provocación, cultura"s.</p>
            </div>
          </div>
        
        <div class="row" id="Menu">
          <div class="col navMenu">
                <h2 class="text-center" >~ Menu ~</h2>
          </div>
        </div>
        <div class="row bg-light">
          <div class="col-md-4" data-aos="slide-up">
            <div class="card view zoom">
                <img class="card-img-top img-fluid " src="assets/images/meat-menu.jpg" />
                <div class="card-body">
                  <h5 class="card-title">~ Pizzas ~</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Bocconcini di carne in nido di sfoglia</li>
                    <li class="list-group-item">Bruschette con maiale al curry</li>
                  <li class="list-group-item">Uova al prosciutto</li>
                  <li class="list-group-item">Vitello tonnato</li>
                  <li class="list-group-item">Fesa di tacchino marinata con olive</li>
                </ul>
                </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="slide-up">
            <div class="card">
                <img class="card-img-top img-fluid " src="assets/images/fish-menu.jpg" />
                <div class="card-body">
                  <h5 class="card-title">~ Pastas ~</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Carpaccio di polpo</li>
                    <li class="list-group-item">Cozze al verde</li>
                  <li class="list-group-item">Cocktail di gamberi</li>
                  <li class="list-group-item">Risotto alla crema di scampi</li>
                  <li class="list-group-item">Ravioli di pesce con crema di scampi</li>
                </ul>
                </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="slide-up">
            <div class="card">
                <img class="card-img-top img-fluid" src="assets/images/menu-vegetarian.jpg" />
                <div class="card-body">
                  <h5 class="card-title">~ Hamburguesas ~</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Parmigiana di melanzane</li>
                    <li class="list-group-item">Strudel con ricotta e spinaci</li>
                  <li class="list-group-item">Polpette di spinaci e ricotta</li>
                  <li class="list-group-item">Frittata di patate al forno</li>
                  <li class="list-group-item">Spaghetti con le polpettine vegetariane</li>
                </ul>
                </div>
            </div>
          </div>
        </div>

        <div class="row" id="Reservation">
          <div class="col navMenu">
                <h2 class="text-center">~ Reservación ~</h2>
          </div>
        </div>
        <div class="row">
          <div class=" col-lg-12 reserve-container" data-aos="fade-up">
            <img class="img-fluid image-reserve" src="assets/images/reserve.jpg" />
            <div class="reserve-text col-lg-12 ">
              <h1 class="text-center">Horarios</h1>
              <div class="row">
                <div class="col-6">
                    <h2 class="text-center">Almuerzo</h2>
                    <h5 class="text-center">12:00 - 15:00</h5>
                </div>
                <div class="col-6">
                    <h2 class="text-center">Cena</h2>
                    <h5 class="text-center">19:30 - 23:30</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="row bg-light">
          <div class="col">
            <form>
              <div class="form-row">
                  <div class="form-group col-6">
                    <h3>Reservación</h3>
                    <label for="inputDate"> Fecha</label>
                    <input type="date" class="form-control" id="inputDate" placeholder="Data gg/mm/aaaa" />
                  </div>
                  <div class="form-group col-6">
                    <h3>Detalle</h3>
                    <label for="inputName"> Nombre</label>
                    <input type="text" class="form-control" id="inputName" placeholder="Nombre" />
                  </div>
                  <div class="form-group col-6">
                    <label for="inputTime"> Horario</label>
                    <input type="time" class="form-control" id="inputTime" placeholder="Timetables" />
                  </div>
                  <div class="form-group col-6">
                    <label for="inputEmail"> Correo</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Correo" />
                  </div>
                  <div class="form-group col-6">
                    <label for="inputNumber"> Numero de invitados</label>
                    <input type="number" class="form-control" id="inputNumber" placeholder="Numero de invitados" />
                  </div>
                  <div class="form-group col-6">
                    <label for="inputCel"> Teléfono</label>
                    <input type="tel" class="form-control" id="inputCel" placeholder="Teléfono" />
                  </div>
                  <div class="form-group col-12">
                    <label for="inputComment"> Otras solicitudes</label>
                  <textarea class="form-control" rows="4" id="inputComment" placeholder="Otras solicitudes"></textarea>
                </div>
              </div>
              <div class="row">
                  <div class="col-md-4 col-md-offset-4">
                    <button type="submit" class="btn btn-secondary btn-block">Reservar</button>
                  </div>
                </div>
            </form>
          </div>
        </div>

        <div class="row" id="OurLocation">
          <div class="col navMenu">
            <h2 class="text-center">~ Nuestra ubicación ~</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <h3>Dirección:</h3>
            <p>6a calle 7-19 Quetzaltenango, Guatemala </p>
          </div>
          <div class="col-md-3">
            <h3>Teléfono:</h3>
            <p>77619171 </p>
          </div>
          <div class="col-md-3">
            <h3>Servicio a domicilio:</h3>
            <p>77619171 </p>
          </div>
        </div>

        <div class="row footer bg-light">
          <div class="col">
            <p class="text-center">Follow us: 
              <a class="social-icon" href="#"><i class="fab fa-facebook"></i></a> 
              <a class="social-icon" href="#"><i class="fab fa-instagram"></i></a></p>
          </div>
          <div class="col">
            <p class="text-center">Copyright &copy; May-2022</p>
          </div>
          <div class="col">
            <p class="text-center">Powered by: <a href="#">LM</a></p>
          </div>
        </div>
    </div>
  </div>
) } }

export default App;