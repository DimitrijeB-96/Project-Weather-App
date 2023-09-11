export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.handleCityDefault();
    this.view.handleInput(this.handleCityInput);
    this.view.handleToggle(this.handleUnitsChange);
    this.view.handleChangeDailyInfo(this.handleInfoChange);
  }

  handleTodayDate = async (days, formatedDate) => {
    this.view.displayTodayDateAndDay(days, formatedDate);  
  }

  handleCityDefault = async () => {
    try {
      const [dataForecast, dataAstronomy, status] = await this.model.defaultLocation();
      let displayUnits = this.model.getUnits();
      let currentCity = this.model.getCityName();
      let isHourly = this.model.getInfo();
  
      if (dataForecast && dataForecast && status === 200) {
        const forecastdays = dataForecast.forecast.forecastday;
  
        const currentTime = this.model.currentTime(dataForecast);
        const formatedDate = this.model.formatTodaysDate(dataForecast);
        const days = this.model.getDayName(forecastdays);
        const hours = this.model.getHours(forecastdays, dataForecast.current);

        if (currentCity === dataForecast.location.name) {
          this.handleTodayDate(days, formatedDate);
          this.view.todayWeatherCard(dataForecast, currentCity, currentTime, displayUnits);
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
    } catch {}
  }

  handleCityInput = async (search) => {
    try {
      const [dataForecast, dataAstronomy] = await this.model.getLocation(search);
      let displayUnits = this.model.getUnits();
      let isHourly = this.model.getInfo();

      console.log(dataForecast);

      if (dataForecast && dataForecast) {
        const forecastdays = dataForecast.forecast.forecastday;

        const currentTime = this.model.currentTime(dataForecast);
        const formatedDate = this.model.formatTodaysDate(dataForecast);
        const hours = this.model.getHours(forecastdays, dataForecast.current);
        const days = this.model.getDayName(forecastdays);

        this.handleTodayDate(days, formatedDate);
        this.view.todayWeatherCard(dataForecast, dataForecast.location.name, currentTime, displayUnits);
        this.view.todayAdvanceInfo(dataAstronomy, dataForecast, displayUnits);
        this.view.handleDisplayedColors(dataForecast, isHourly);
        this.view.toggleBtnColor(dataForecast);

        if (isHourly) {
          this.view.hourlyForecast(dataForecast, hours, displayUnits);
        } else {
          this.view.dailyForecast(forecastdays, days, displayUnits);
        }
      }
    } catch {}
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