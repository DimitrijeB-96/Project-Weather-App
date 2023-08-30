export class View {
  constructor() {
    this.container = this.createElement('div', 'container');

    this.input = this.createElement('input');

    this.searchBtn = this.createElement('button');
    this.searchBtn.textContent = 'Search';

    this.container.append(this.input, this.searchBtn);
    document.body.append(this.container);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }

    return element;
  }

  handleInput(handler) {
    this.searchBtn.addEventListener('click', () => {
      handler(this.input.value);
    })
  }
}