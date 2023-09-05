export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.handleTodayCard();
    this.view.handleInput(this.handleTodayInput);
    this.view.handleToggle(this.handleUnitsChange);
  }

  handleTodayCard = async () => {
    const data = await this.model.defaultLocation();
    let displayUnits = this.model.getUnits();
    let currentCity = this.model.getCityName();
    let temp;

    if (data) {
      const getDataLocation = data.data.location;
      const getDataCurrent = data.data.current;
      const unitsC = getDataCurrent.temp_c;
      const unitsF = getDataCurrent.temp_f;
      if (displayUnits === true) {
        temp = unitsF;
      } else {
        temp = unitsC;
      }

      if (currentCity === getDataLocation.name) {
        this.view.todayWeatherCard(
          currentCity,
          getDataLocation.country,
          temp,
          displayUnits,
          getDataCurrent.condition.text, 
          getDataCurrent.last_updated,
          getDataCurrent.is_day
        );
      }
    }
  }

  handleTodayInput = async (search) => {
    const data = await this.model.getLocation(search);
    let displayUnits = this.model.getUnits();
    let temp;

    if (data) {
      const getDataLocation = data.data.location;
      const getDataCurrent = data.data.current;
      const unitsC = getDataCurrent.temp_c;
      const unitsF = getDataCurrent.temp_f;
      
      if (displayUnits === true) {
        temp = unitsF;
      } else {
        temp = unitsC;
      }
      
      this.view.todayWeatherCard(
        getDataLocation.name, 
        getDataLocation.country,
        temp,
        displayUnits,
        getDataCurrent.condition.text, 
        getDataCurrent.last_updated,
        getDataCurrent.is_day
      );
    }
  }

  handleUnitsChange = (input) => {
    this.model.changeUnits();

    const currentUnits = this.model.getUnits();
    
    if (currentUnits !== input) {
      this.model.changeUnits();
    }
    this.handleTodayCard();
  }
}