import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";
import Luchador from "./Luchador.js";
import Personajes from "./Personajes.js";
import Rey from "./Rey.js";

class Component {
  element;
  parentElement;

  constructor(parentElement, className, htmlTag = "div") {
    this.element = document.createElement(htmlTag);
    this.element.className = className;
    this.parentElement = parentElement;

    this.parentElement.append(this.element);
  }
}

export default Component;
