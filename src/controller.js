export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.handleTodayCard();
    this.view.handleInput(this.handleTodayInput);
    this.view.handleToggle(this.handleUnitsChange);
    this.view.handleChangeForecastDisplay();
  }

  handleTodayCard = async () => {
    const [dataForecast, dataAstronomy] = await this.model.defaultLocation();
    let displayUnits = this.model.getUnits();
    let currentCity = this.model.getCityName();
    let unitsTemp;
    let feelsLikeTemp;
    let unitsWind;
    let minTemp;
    let maxTemp;

    console.log(dataForecast);
    //console.log(dataAstronomy);

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

      //console.log(hours);

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
        //this.view.dailyForecast(getDataForecast.forecastday, days,  displayUnits);
        this.view.hourlyForecast(hours, getDataCurrent.is_day, displayUnits);
      }
    }
  }

  // IF CONDTION IS NOT VALID TOGGLE INPUT STOP WORKING PROPERLY
  handleTodayInput = async (search) => {
    const [dataForecast, dataAstronomy] = await this.model.getLocation(search);
    let displayUnits = this.model.getUnits();
    let currentCity = this.model.getCityName();
    let unitsTemp;
    let feelsLikeTemp;
    let unitsWind;
    let minTemp;
    let maxTemp;

    //console.log(dataForecast);
    //console.log(dataAstronomy);

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

      console.log(hours);

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
      //this.view.dailyForecast(dataForecast.forecast.forecastday, days, displayUnits);
      this.view.hourlyForecast(hours, getDataCurrent.is_day, displayUnits);
    }
  }

  handleUnitsChange = (input) => {
    this.model.changeUnits();
    this.model.getCityName();
    const currentUnits = this.model.getUnits();
    
    if (currentUnits !== input) {
      this.model.changeUnits();
    }
    this.handleTodayCard();
  }
}