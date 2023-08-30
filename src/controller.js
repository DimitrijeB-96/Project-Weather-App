export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.handleInput(this.handleSeachLocation);
  }

  handleSeachLocation = (location) => {
    this.model.getLocation(location);  
  }
}