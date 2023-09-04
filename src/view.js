export class View {
  constructor() {
    this.topContainer = this.createElement('div', 'top-container');
    this.bottomContainer = this.createElement('div', 'bottom-container');

    this.leftSection = this.createElement('div', 'left-section');
    this.centralSection = this.createElement('div', 'central-section');

    this.toggleSection = this.createElement('div', 'toggle-section');
    this.searchSection = this.createElement('div', 'search-section');
    this.advanceSection = this.createElement('div', 'advance-section');


    // SUBMIT ON ENTER CLICK ? SHOULD THIS BE IN THE FORM ?
    this.input = this.createElement('input');
    this.searchBtn = this.createElement('button');
    this.searchBtn.textContent = 'Search';

    //this.toggleSection.append();
    this.searchSection.append(this.input, this.searchBtn);
    //this.advanceSection.append();

    //this.leftSection.append();
    this.centralSection.append(this.toggleSection, this.searchSection, this.advanceSection);

    this.todayWeatherCard();

    this.topContainer.append(this.leftSection, this.centralSection);
    //this.bottomContainer.append();

    document.body.append(this.topContainer, this.bottomContainer);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }

    return element;
  }

  //This should get handler to accept default data from Model Class
  todayWeatherCard(city, country, temp, wText, dateTime) {
    const div = this.createElement('div', 'today-card');
    
    const cityName = this.createElement('h2', 'city-name');
    cityName.textContent = city;

    const countryName = this.createElement('h3', 'country-name');
    countryName.textContent = country;

    const temperature = this.createElement('h2', 'temperature');
    temperature.textContent = temp;

    const weatherIcon = this.createElement('span', 'today-weather-icon');
    //weatherIcon.textContent = wIcon;

    const weatherText = this.createElement('p', 'weather-text');
    weatherText.textContent = wText;

    const dateAndTime = this.createElement('p', 'date-time');
    dateAndTime.textContent = dateTime;
    
    div.append(cityName, countryName, temperature, weatherIcon, weatherText, dateAndTime);
    this.leftSection.append(div);
    
  }

  // Hourly and future days ?
  futureWeatherCard() {
    const div = this.createElement('div', 'future-card');

    const day = this.createElement('h3', 'day');
    
    const weatherIcon = this.createElement('span', 'future-weather-icon');
    const maxTemperature = this.createElement('h2', 'max-temperature');
    const minTemperature = this.createElement('h3', 'min-temperature');

    div.append(day, weatherIcon, maxTemperature, minTemperature);
  }

  handleInput(handler) {
    this.searchBtn.addEventListener('click', () => {
      handler(this.input.value);
    })
  }
}