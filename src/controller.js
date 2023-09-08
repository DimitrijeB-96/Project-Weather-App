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
      let unitsTemp;
      let feelsLikeTemp;
      let unitsWind;
      let minTemp;
      let maxTemp;
  
      if (dataForecast && dataForecast) {
        const todayForecast = dataForecast.forecast.forecastday[0].day;
        const getDataForecast = dataForecast.forecast;
        const getDataLocation = dataForecast.location;
        const getDataCurrent = dataForecast.current;
        const unitsC = getDataCurrent.temp_c;
        const feelsLikeC = getDataCurrent.feelslike_c;
        const windMetric = getDataCurrent.wind_kph;
        const unitsF = getDataCurrent.temp_f;
        const feelsLikeF = getDataCurrent.feelslike_f;
        const windImperial = getDataCurrent.wind_mph;
        const getDataAstronomy = dataAstronomy.astronomy.astro;
  
        const days = this.model.getDayName(getDataForecast.forecastday);
        const hours = this.model.getHours(getDataForecast.forecastday, getDataCurrent);
  
        if (displayUnits) {
          unitsTemp = unitsF;
          feelsLikeTemp = feelsLikeF;
          unitsWind = windImperial;
          minTemp = todayForecast.mintemp_f;
          maxTemp = todayForecast.maxtemp_f;
        } else {
          unitsTemp = unitsC;
          feelsLikeTemp = feelsLikeC;
          unitsWind = windMetric;
          minTemp = todayForecast.mintemp_c;
          maxTemp = todayForecast.maxtemp_c;
        }
  
        if (currentCity === getDataLocation.name) {
          this.view.todayWeatherCard(currentCity, getDataLocation.country, unitsTemp, displayUnits, getDataCurrent.condition.text, getDataCurrent.last_updated, getDataCurrent.is_day);
          this.view.todayAdvanceInfo(minTemp, maxTemp, getDataAstronomy.sunrise, getDataAstronomy.sunset, getDataCurrent.humidity, todayForecast.daily_chance_of_rain, feelsLikeTemp, unitsWind, displayUnits);
          this.view.handleDisplayedColors(getDataCurrent.condition.text, getDataCurrent.is_day, isHourly);
          this.view.toggleBtnColor(getDataCurrent.condition.text, getDataCurrent.is_day);
          if (isHourly) {
            this.view.hourlyForecast(hours, getDataCurrent.is_day, displayUnits);
          } else {
            this.view.dailyForecast(getDataForecast.forecastday, days, displayUnits);
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
      let unitsTemp;
      let feelsLikeTemp;
      let unitsWind;
      let minTemp;
      let maxTemp;

      if (dataForecast && dataForecast) {
        const todayForecast = dataForecast.forecast.forecastday[0].day;
        const getDataForecast = dataForecast.forecast;
        const getDataLocation = dataForecast.location;
        const getDataCurrent = dataForecast.current;
        const unitsC = getDataCurrent.temp_c;
        const feelsLikeC = getDataCurrent.feelslike_c;
        const windMetric = getDataCurrent.wind_kph;
        const unitsF = getDataCurrent.temp_f;
        const feelsLikeF = getDataCurrent.feelslike_f;
        const windImperial = getDataCurrent.wind_mph;
        const getDataAstronomy = dataAstronomy.astronomy.astro;

        const hours = this.model.getHours(getDataForecast.forecastday, getDataCurrent);
        const days = this.model.getDayName(getDataForecast.forecastday);

        if (displayUnits) {
          unitsTemp = unitsF;
          feelsLikeTemp = feelsLikeF;
          unitsWind = windImperial;
          minTemp = todayForecast.mintemp_f;
          maxTemp = todayForecast.maxtemp_f;
        } else {
          unitsTemp = unitsC;
          feelsLikeTemp = feelsLikeC;
          unitsWind = windMetric;
          minTemp = todayForecast.mintemp_c;
          maxTemp = todayForecast.maxtemp_c;
        }

        this.view.todayWeatherCard(getDataLocation.name, getDataLocation.country, unitsTemp, displayUnits, getDataCurrent.condition.text, getDataCurrent.last_updated, getDataCurrent.is_day);
        this.view.todayAdvanceInfo(minTemp, maxTemp, getDataAstronomy.sunrise, getDataAstronomy.sunset, getDataCurrent.humidity, todayForecast.daily_chance_of_rain, feelsLikeTemp, unitsWind, displayUnits);
        this.view.handleDisplayedColors(getDataCurrent.condition.text, getDataCurrent.is_day, isHourly);
        this.view.toggleBtnColor(getDataCurrent.condition.text, getDataCurrent.is_day);
        if (isHourly) {
          this.view.hourlyForecast(hours, getDataCurrent.is_day, displayUnits);
        } else {
          this.view.dailyForecast(getDataForecast.forecastday, days, displayUnits);
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
      const getDataForecast = dataForecast.forecast;
      const getDataCurrent = dataForecast.current;

      const days = this.model.getDayName(getDataForecast.forecastday);
      const hours = this.model.getHours(getDataForecast.forecastday, getDataCurrent);

      if (btn === 'hourly') {
        this.view.btnColors(getDataCurrent.condition.text, getDataCurrent.is_day, 'hourly', 'daily');
        isHourly === true ? true : this.model.changeInfo();
        this.view.hourlyForecast(hours, getDataCurrent.is_day, displayUnits);
      } else if (btn === 'daily') {
        this.view.btnColors(getDataCurrent.condition.text, getDataCurrent.is_day, 'daily', 'hourly');
        isHourly === false ? false : this.model.changeInfo();
        this.view.dailyForecast(getDataForecast.forecastday, days, displayUnits);
      }
    }
  }
}