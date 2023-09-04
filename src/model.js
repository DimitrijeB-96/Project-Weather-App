//apiKey = "757ce984dbc947619fd83911232708"

// https://api.weatherapi.com/v1/current.json?key=757ce984dbc947619fd83911232708&q=${location}

// Import npm date library

export class Model {
  constructor() {
    this.imageArray = [
      { id: 1, name: 'Sunny' },
    ];

    this.addImagesToObj();

    document.body.style.backgroundImage = this.imageArray[0].src;
    console.log(document.body.style.backgroundImage);
  }

  addImagesToObj() {
    const sunnyImg = new Image();
    sunnyImg.src = '../images/sunny.jpg';
    this.imageArray[0] = sunnyImg;
  }

  async defaultLocation() {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=757ce984dbc947619fd83911232708&q=$Novi+Sad`, { mode: 'cors'});
      const data = await response.json();
      
      return { data };
    } catch (error) {
      console.log(error); 
    }
  }

  async getLocation(location) {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=757ce984dbc947619fd83911232708&q=${location}`, { mode: 'cors'});
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
}