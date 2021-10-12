import Luchador from "./Luchador.js";
import Personajes from "./Personajes.js";
import Component from "./Component.js";

class LuchadorComponente extends Component {
  nombre;
  familia;
  edad;
  vivo;
  arma;
  destreza;
  image;
  constructor(nombre, familia, edad, vivo, arma, destreza) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.vivo = vivo;
    this.arma = arma;
    this.destreza = destreza;
    this.image = image;

    this.generateHTML(nombre, familia, edad, vivo, arma, destreza, image);
  }

  generateHTML(nombre, familia, edad, vivo, arma, destreza, image) {
    const html = `<li class="character col">
          <div class="card character__card">
            <img
              src="img/${image}.jpg"
              alt="${nombre} de la ${familia}"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${nombre} de la ${familia} </h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${edad} </li>
                  <li>
                    Estado:
                   
                     
                        <i class="fas fa-thumbs-down"></i>
                      
                        <i class="fas fa-thumbs-up"></i>
                      
                    }
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Arma:${arma}</li>
                  <li>Destreza: ${destreza}</li>

                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>
        </li>`;
    this.element.innerHTML = html;
  }
}

export default LuchadorComponente;
