class Component {
  element;
  parentElement;

  constructor(parentElement, className, htmlTag = "li") {
    this.element = document.createElement(htmlTag);
    this.element.className = "character col";
    this.parentElement = parentElement;

    this.parentElement.append(this.element);
  }
}

export default Component;
