export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.handleTodayCard();
    this.view.handleInput(this.handleTodayInput);
  }

  handleTodayCard = async () => {
    const data = await this.model.defaultLocation();

    if (data) {
      const getDataLocation = data.data.location;
      const getDataCurrent = data.data.current;
      this.view.todayWeatherCard(
        getDataLocation.name, 
        getDataLocation.country, 
        getDataCurrent.temp_c, 
        getDataCurrent.condition.text, 
        getDataCurrent.last_updated
      );
    }   
  }

  handleTodayInput = async (search) => {
    const data = await this.model.getLocation(search);

    console.log(data);
    if (data) {
      const getDataLocation = data.data.location;
      const getDataCurrent = data.data.current;
      this.view.todayWeatherCard(
        getDataLocation.name, 
        getDataLocation.country, 
        getDataCurrent.temp_c, 
        getDataCurrent.condition.text, 
        getDataCurrent.last_updated
      );
    }
  }
}