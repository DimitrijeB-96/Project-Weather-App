//apiKey = "757ce984dbc947619fd83911232708"

// https://api.weatherapi.com/v1/current.json?key=757ce984dbc947619fd83911232708&q=${location}

// Import npm date library

export class Model {
  constructor() {
    // False represent Celsius, true represent Fahrenheit
    this.isUnits = false;
    this.currentCityName = 'Novi Sad';

    this.imageArray = [
      { id: 1, name: 'sunny' },
      { id: 2, name: 'partially-sunny' },
      { id: 3, name: 'clear-sky' },
      { id: 4, name: 'cloudy' },
      { id: 5, name: 'cloud-Sky' },
      { id: 6, name: 'rainy' },
      { id: 7, name: 'foggy' },
      { id: 8, name: 'snowing' },
      { id: 9, name: 'windy' },
      { id: 10, name: 'night-sky-cloudy' },
      { id: 11, name: 'tunderstorm' },
    ];

    this.addImagesToObj();
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

  addImagesToObj() {
    const sunnyImg = new Image();
    sunnyImg.src = '../images/sunny.jpg';
    this.imageArray[0].image = sunnyImg;

    const partiallySunnyImg = new Image();
    partiallySunnyImg.src = '../images/partially-sunny.jpg';
    this.imageArray[1].image = partiallySunnyImg;

    const clearSkyImg = new Image();
    clearSkyImg.src = '../images/clear-sky.jpg';
    this.imageArray[2].image = clearSkyImg;

    const cloudyImg = new Image();
    cloudyImg.src = '../images/cloudy.jpg';
    this.imageArray[3].image = cloudyImg;

    const cloudImg = new Image();
    cloudImg.src = '../images/cloud.jpg';
    this.imageArray[4].image = cloudImg;

    const rainyImg = new Image();
    rainyImg.src = '../images/rainy.jpg';
    this.imageArray[5].image = rainyImg;

    const foggyImg = new Image();
    foggyImg.src = '../images/foggy.jpg';
    this.imageArray[6].image = foggyImg;

    const snowingImg = new Image();
    snowingImg.src = '../images/snowing.jpg';
    this.imageArray[7].image = snowingImg;

    const windyImg = new Image();
    windyImg.src = '../images/windy.jpg';
    this.imageArray[8].image = windyImg;

    const nightSkyCloudyImg = new Image();
    nightSkyCloudyImg.src = '../images/night-sky-cloudy.jpg';
    this.imageArray[9].image = nightSkyCloudyImg;

    const tunderstormImg = new Image();
    tunderstormImg.src = '../images/tunderstorm.jpg';
    this.imageArray[10].image = tunderstormImg;
  }

  // FETCHING ASTRONOMY DATA NEED TO UPDATE ON IT'S OWN, NOW IT IS HARDCODED
  async defaultLocation() {
    try {
      const forecast = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=757ce984dbc947619fd83911232708&q=${this.currentCityName}&days=7`, { mode: 'cors'});
      const astronomy = await fetch(`https://api.weatherapi.com/v1/astronomy.json?key=757ce984dbc947619fd83911232708&q=${this.currentCityName}&dt=2023-09-06`, { mode: 'cors'});
      const dataForecast = await forecast.json();
      const dataAstronomy = await astronomy.json();
      
      return Promise.all([dataForecast, dataAstronomy]);
    } catch (error) {
      console.log(error); 
    }
  }

  async getLocation(location) {
    try {
      const forecast = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=757ce984dbc947619fd83911232708&q=${location}&days=7`, { mode: 'cors'});
      const astronomy = await fetch(`https://api.weatherapi.com/v1/astronomy.json?key=757ce984dbc947619fd83911232708&q=${location}&dt=2023-09-06`, { mode: 'cors'});
      const dataForecast = await forecast.json();
      const dataAstronomy = await astronomy.json();

      this.changeCityName(location);
      
      return Promise.all([dataForecast, dataAstronomy]);
    } catch (error) {
      console.log(error); 
    }
  }
}