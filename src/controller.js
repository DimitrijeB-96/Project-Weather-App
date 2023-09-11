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

  handleError = (status, errorCode) => { 
    let message = '';

    if (status === 400) {
      if (errorCode === 1005) {
        message = 'Invalid WeatherAPI URL :(.';
      } 
    } else if (status === 401) {
      if (errorCode === 2006) {
        message = 'API Key provided is invalid.';
      } 
    } else if (status === 403) {
      if (errorCode === 2007) {
        message = "Exceeded calls per month, please try again later.";
      } else if (errorCode === 2008) {
        message = "Disabled API KEY.";
      } 
    }
    this.view.pageWhenError(message, status, errorCode);
  }

  handleCityDefault = async () => {
    try {
      const [dataForecast, dataAstronomy, status, errorCode] = await this.model.defaultLocation();
      let displayUnits = this.model.getUnits();
      let currentCity = this.model.getCityName();
      let isHourly = this.model.getInfo();

      if (dataForecast && dataForecast && status === 200) {
        const forecastdays = dataForecast.forecast.forecastday;
  
        const currentTime = this.model.currentTime(dataForecast);
        const formatedDate = this.model.formatTodaysDate(dataForecast);
        const days = this.model.getDayName(forecastdays);
        const hours = this.model.getHours(forecastdays, dataForecast.current);

        if (isHourly) {
          this.view.hourlyForecast(dataForecast, hours, displayUnits);
        } else {
          this.view.dailyForecast(forecastdays, days, displayUnits);
        }
        this.handleTodayDate(days, formatedDate);
        this.view.todayWeatherCard(dataForecast, currentCity, currentTime, displayUnits);
        this.view.todayAdvanceInfo(dataAstronomy, dataForecast, displayUnits);
        this.view.handleDisplayedColors(dataForecast, isHourly);
        this.view.toggleBtnColor(dataForecast);
      } else if (status === 401 || status === 403) {
        this.handleError(status, errorCode);
      }
    } catch (error) {
      alert(error);
    }
  }

  handleCityInput = async (search) => {
    try {
      const [dataForecast, dataAstronomy, status, errorCode] = await this.model.getLocation(search);
      let displayUnits = this.model.getUnits();
      let isHourly = this.model.getInfo();

      if (dataForecast && dataForecast && status === 200 && errorCode === 1) {
        const forecastdays = dataForecast.forecast.forecastday;

        const currentTime = this.model.currentTime(dataForecast);
        const formatedDate = this.model.formatTodaysDate(dataForecast);
        const hours = this.model.getHours(forecastdays, dataForecast.current);
        const days = this.model.getDayName(forecastdays);

        if (isHourly) {
          this.view.hourlyForecast(dataForecast, hours, displayUnits);
        } else {
          this.view.dailyForecast(forecastdays, days, displayUnits);
        }
        this.handleTodayDate(days, formatedDate);
        this.view.todayWeatherCard(dataForecast, dataForecast.location.name, currentTime, displayUnits);
        this.view.todayAdvanceInfo(dataAstronomy, dataForecast, displayUnits);
        this.view.handleDisplayedColors(dataForecast, isHourly);
        this.view.toggleBtnColor(dataForecast);
      } else if (status === 401 || status === 403) {
        this.handleError(status, errorCode);
      } else if (status === 400) {
        if (errorCode === 1003 || errorCode === 1006) {
          this.view.handleInvalidLocationInput(errorCode);
        }
      }
    } catch (error) {
      alert(error);
    }
  }

  handleUnitsChange = (input) => {
    this.model.changeUnits();
    this.model.getCityName();
    const currentUnits = this.model.getUnits();
    
    if (currentUnits !== input) {
      this.model.changeUnits();
    }
    // On bug stayed unsolved here, if you input city that doesn't exist but Weather API find some place and display it with different name
    // when you change units it display location name because that input is saved and used to be displayed
    this.handleCityDefault();
  }

  handleInfoChange = async (btn) => {
    const [dataForecast, dataAstronomy, status, errorCode] = await this.model.defaultLocation();
    let displayUnits = this.model.getUnits();
    let isHourly = this.model.getInfo();

    if (dataForecast) {
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