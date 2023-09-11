import { format, getHours } from 'date-fns';

export class Model {
  constructor() {
    this.isUnits = false; // False represent Celsius, true represent Fahrenheit
    this.isHourly = true;
    this.currentCityName = 'Novi Sad'; // Default location is my city <3 :) 
    this.responseStatus;
    this.responseError = 1; // This is just placeholder for default and code to use when there status is 200
  }

  changeUnits() {
    return this.isUnits = !this.isUnits;
  }

  getUnits() {
    return this.isUnits;
  }

  getCityName() {
    return this.currentCityName;
  }

  changeCityName(name) {
    this.currentCityName = name;

    return this.currentCityName;
  }

  getInfo() {
    return this.isHourly;
  }

  changeInfo() {
    return this.isHourly = !this.isHourly;
  }

  getDayName(allDays) {
    let array = [];

    allDays.forEach(day => {
      array.push(day.date);
    });

    let splittedDate = [];

    array.forEach(element => {
      splittedDate.push(element.split('-').map(e => parseInt(e)));
    });

    let daysName = [];

    for (let i = 0; i < splittedDate.length; i++) {
      let innerArray = splittedDate[i];
      for (let j = 0; j < innerArray.length / 3; j++) {
        daysName.push(format(new Date(innerArray[0], innerArray[1] - 1, innerArray[2]), 'EEEE'));
      }
    }

    return daysName;
  }

  getHours(allDays, h) {
    let timeNow = h.last_updated;
    
    let todayDate = timeNow.split(' ')[0];
    let todayTime = timeNow.split(' ')[1];

    todayDate = todayDate.split('-');
    todayTime = todayTime.split(':');

    let getThisHour = getHours(new Date(todayDate[0], todayDate[1], todayDate[2], todayTime[0], todayTime[1]));

    let today = allDays[0].hour;
    let tomorrow = allDays[1].hour;

    let allTodayHours = [];
    let allTodayTempC = [];
    let allTodayTempF = [];
    let allTodayWeatherText = [];

    today.forEach(hour => {
      allTodayHours.push(hour.time);
      allTodayTempC.push(hour.temp_c);
      allTodayTempF.push(hour.temp_f);
      allTodayWeatherText.push(hour.condition.text);
    });

    let todayHours = [];

    allTodayHours.forEach(hour => {
      hour = hour.split(' ');

      todayHours.push(hour[1]);
    });

    let todayResult = todayHours.map((h, i) => ({
      hour: h,
      temp_c: allTodayTempC[i],
      temp_f: allTodayTempF[i],
      iconText: allTodayWeatherText[i]
    }));

    let allTomorrowHours = [];
    let allTomorrowTempC = [];
    let allTomorrowTempF = [];
    let allTomorrowWeatherText = [];

    tomorrow.forEach(hour => {
      allTomorrowHours.push(hour.time);
      allTomorrowTempC.push(hour.temp_c);
      allTomorrowTempF.push(hour.temp_f);
      allTomorrowWeatherText.push(hour.condition.text);
    });

    let tomorrowHours = [];

    allTomorrowHours.forEach(hour => {
      hour = hour.split(' ');

      tomorrowHours.push(hour[1]);
    });

    let tomorrowResult = tomorrowHours.map((h, i) => ({
      hour: h,
      temp_c: allTomorrowTempC[i],
      temp_f: allTomorrowTempF[i],
      iconText: allTomorrowWeatherText[i]
    }));

    let allTogether = [...todayResult, ...tomorrowResult];

    let result = [];

    let counter = 1;
    for (let i = getThisHour + 1; i < allTogether.length; i++) {
      result.push(allTogether[i]);
      
      if (counter === 12) {
        break;
      }
      counter++;
    }

    return result;
  }

  formatTodaysDate(forecast) {
    let date = forecast.location.localtime;
    
    date = date.split(' ');

    const todayDate = date[0].replaceAll('-', '.');

    return todayDate;
  }

  currentTime(forecast) {
    let dateAndTime = forecast.location.localtime;

    dateAndTime = dateAndTime.split(' ');

    const time = dateAndTime[1];

    return time;
  }

  async defaultLocation() {
    try {
      // Free Weather API forecast only 3 days in advance, but I left 7 if they change it in future :)
      const forecast = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=757ce984dbc947619fd83911232708&q=${this.currentCityName}&days=7`, { mode: 'cors'});
      const astronomy = await fetch(`https://api.weatherapi.com/v1/astronomy.json?key=757ce984dbc947619fd83911232708&q=${this.currentCityName}`, { mode: 'cors'});
      const dataForecast = await forecast.json();
      const dataAstronomy = await astronomy.json();

      this.responseStatus = forecast.status;
      if (this.responseStatus !== 200) {
        this.responseError = dataForecast.error.code;
      }

      return Promise.all([dataForecast, dataAstronomy, this.responseStatus, this.responseError]);
    } catch (error) {
      throw error;
    }
  }

  async getLocation(location) {
    try {
      const forecast = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=757ce984dbc947619fd83911232708&q=${location}&days=7`, { mode: 'cors'});
      const astronomy = await fetch(`https://api.weatherapi.com/v1/astronomy.json?key=757ce984dbc947619fd83911232708&q=${location}`, { mode: 'cors'});
      const dataForecast = await forecast.json();
      const dataAstronomy = await astronomy.json();

      this.responseStatus = forecast.status;
      if (this.responseStatus === 200) {
        this.changeCityName(location);
        this.responseError = 1;
      } else {
        this.responseError = dataForecast.error.code;
      }
      
      return Promise.all([dataForecast, dataAstronomy, this.responseStatus, this.responseError]);
    } catch (error) {
      return error;
    }
  }
}