import Component from "./Component.js";
import Personajes from "./Personajes.js";

class Card extends Component {
  personaje;
  constructor(
    parentElement,
    { nombre, familia, edad, imagen }
  ) {
    super(parentElement, "character col", "li");

    this.personaje = {
      nombre,
      familia,
      edad,
      vivo,
      serie,
      imagen,
    };
    this.generateHTML();
  }

  generateHTML() {
    const { nombre, familia, edad, imagen };
    const html = `<li class="character col">
          <div class="card character__card">
            <img
              src="img/${imagen}.jpg"
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
                    ${
                      vivo
                    ?<i class="fas fa-thumbs-down"></i>
                    :<i class="fas fa-thumbs-up"></i>
                    }
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: X</li>
                  <li>Arma: XXX</li>
                  <li>Destreza: X</li>
                  <li>Peloteo: X</li>
                  <li>Asesora a: X</li>
                  <li>Sirve a: X</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button
                    type="button"
                    onclick="structure()"
                    value="AYUDA"
                  ></button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>
        </li>`;
        this.element.innerHTML=html;
  }
}
