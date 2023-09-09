export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.handleCityDefault();
    this.view.handleInput(this.handleCityInput);
    this.view.handleToggle(this.handleUnitsChange);
    this.view.handleChangeDailyInfo(this.handleInfoChange);
  }

  handleCityDefault = async () => {
    try {
      const [dataForecast, dataAstronomy] = await this.model.defaultLocation();
      let displayUnits = this.model.getUnits();
      let currentCity = this.model.getCityName();
      let isHourly = this.model.getInfo();

      console.log(dataForecast);
      console.log(dataAstronomy);
  
      if (dataForecast && dataForecast) {
        const forecastdays = dataForecast.forecast.forecastday;
  
        const days = this.model.getDayName(forecastdays);
        const hours = this.model.getHours(forecastdays, dataForecast.current);
  
        if (currentCity === dataForecast.location.name) {
          this.view.todayWeatherCard(dataForecast, currentCity, displayUnits);
          this.view.todayAdvanceInfo(dataAstronomy, dataForecast, displayUnits);
          this.view.handleDisplayedColors(dataForecast, isHourly);
          this.view.toggleBtnColor(dataForecast);

          if (isHourly) {
            this.view.hourlyForecast(dataForecast, hours, displayUnits);
          } else {
            this.view.dailyForecast(forecastdays, days, displayUnits);
          }
        }
      }
    } catch(error) {
      // NOT IMPLEMENTED YET
      console.log('handleCityDefault', error);
    }
  }

  handleCityInput = async (search) => {
    try {
      const [dataForecast, dataAstronomy] = await this.model.getLocation(search);
      let displayUnits = this.model.getUnits();
      let isHourly = this.model.getInfo();

      if (dataForecast && dataForecast) {
        const forecastdays = dataForecast.forecast.forecastday;

        const hours = this.model.getHours(forecastdays, dataForecast.current);
        const days = this.model.getDayName(forecastdays);

        this.view.todayWeatherCard(dataForecast, dataForecast.location.name, displayUnits);
        this.view.todayAdvanceInfo(dataAstronomy, dataForecast, displayUnits);
        this.view.handleDisplayedColors(dataForecast, isHourly);
        this.view.toggleBtnColor(dataForecast);
        
        if (isHourly) {
          this.view.hourlyForecast(dataForecast, hours, displayUnits);
        } else {
          this.view.dailyForecast(forecastdays, days, displayUnits);
        }
      }
    } catch (error) {
      // NOT IMPLEMENTED YET
      this.handleCityDefault();
    }
  }

  handleUnitsChange = (input) => {
    this.model.changeUnits();
    this.model.getCityName();
    const currentUnits = this.model.getUnits();
    
    if (currentUnits !== input) {
      this.model.changeUnits();
    }
    this.handleCityDefault();
  }

  handleInfoChange = async (btn) => {
    const [dataForecast, dataAstronomy] = await this.model.defaultLocation();
    let displayUnits = this.model.getUnits();
    let isHourly = this.model.getInfo();

    if (dataForecast && dataForecast) {
      const forecastdays = dataForecast.forecast.forecastday;

      const days = this.model.getDayName(forecastdays);
      const hours = this.model.getHours(forecastdays, dataForecast.current);

      if (btn === 'hourly') {
        this.view.btnColors(dataForecast, 'hourly', 'daily');
        isHourly === true ? true : this.model.changeInfo();
        this.view.hourlyForecast(dataForecast, hours, displayUnits);
      } else if (btn === 'daily') {
        this.view.btnColors(dataForecast, 'daily', 'hourly');
        isHourly === false ? false : this.model.changeInfo();
        this.view.dailyForecast(forecastdays, days, displayUnits);
      }
    }
  }
}