//apiKey = "757ce984dbc947619fd83911232708"

// https://api.weatherapi.com/v1/current.json?key=757ce984dbc947619fd83911232708&q=${location}

// Import npm date library

export class Model {
  constructor() {
    this.defaultLocation();
  }

  async defaultLocation() {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=757ce984dbc947619fd83911232708&q=$Novi+Sad`);
      const data = await response.json();
      // return all together in promise.all ?
      console.log(data.location.country);
      console.log(data.location.name);
      console.log(data.location.localtime);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getLocation(location) {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=757ce984dbc947619fd83911232708&q=${location}`);
      const data = await response.json();
      // return all together in promise.all ?
      console.log(data.location.country);
      console.log(data.location.name);
      console.log(data.location.localtime);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  
}