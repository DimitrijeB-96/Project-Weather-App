export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    //this.view.handleInput(this.handleSeachLocation);
    this.handleTodayCard();
  }

  // handleSeachLocation = (location) => {
  //   this.model.getLocation(location);  
  // }

  handleTodayCard = () => {
    this.model.defaultLocation()
      .then((data) => {
        const getDataLocation = data.data.location;
        const getDataCurrent = data.data.current;
        this.view.todayWeatherCard(getDataLocation.name, getDataLocation.country, getDataCurrent.temp_c, getDataCurrent.condition.text, getDataCurrent.last_updated);
      })//.then((data) => {
        //this.view.getBackground();
      //})
  }
}