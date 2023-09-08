export class View {
  constructor() {
    this.topContainer = this.createElement('div', 'top-container');
    this.bottomContainer = this.createElement('div', 'bottom-container');

    this.leftSection = this.createElement('div', 'left-section');
    this.centralSection = this.createElement('div', 'central-section');

    this.toggleSection = this.createElement('div', 'toggle-section');
    this.searchSection = this.createElement('div', 'search-section');
    this.advanceSection = this.createElement('div', 'advance-section');

    this.selectForecastSection = this.createElement('div', 'select-forecast-section');
    this.forecastSection = this.createElement('div', 'forecast-section');

    this.toggleDiv = this.createElement('div', 'toggle-div');

    this.title = this.createElement('h1', 'title');
    this.title.textContent = 'Weather APP';

    this.celsiousText = this.createElement('p');
    this.celsiousText.textContent = '℃';

    this.fahrenheitText = this.createElement('p');
    this.fahrenheitText.textContent = '℉';

    this.toggleInput = this.createElement('input', 'input-toggle');
    this.toggleInput.type = 'checkbox';

    this.inputLabel = this.createElement('label', 'input-label');
    this.inputLabel.htmlFor = 'search-input';
    this.inputLabel.textContent = 'Search';

    this.input = this.createElement('input');
    this.input.id = 'search-input';
    this.input.type = 'text';
    this.input.placeholder = '';

    this.dailyBtn = this.createElement('button', 'daily-btn');
    this.dailyBtn.type = 'button';
    this.dailyBtn.textContent = 'Daily'

    this.hourlyBtn = this.createElement('button', 'hourly-btn');
    this.hourlyBtn.type = 'button';
    this.hourlyBtn.textContent = 'Hourly'

    this.toggleDiv.append(this.celsiousText, this.toggleInput, this.fahrenheitText);

    this.toggleSection.append(this.title, this.toggleDiv);
    this.searchSection.append(this.input, this.inputLabel);

    this.centralSection.append(this.toggleSection, this.searchSection, this.advanceSection);

    this.topContainer.append(this.leftSection, this.centralSection);

    this.selectForecastSection.append(this.hourlyBtn, this.dailyBtn);
    
    this.bottomContainer.append(this.selectForecastSection, this.forecastSection);

    document.body.append(this.topContainer, this.bottomContainer);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }

    return element;
  }

  todayWeatherCard(city, country, temp, units, wText, dateTime, isDay) {
    while (this.leftSection.firstChild) {
      this.leftSection.removeChild(this.leftSection.firstChild);
    }

    const icon = this.getIcon(wText, isDay);
    
    const div = this.createElement('div', 'today-card');
    
    const cityName = this.createElement('h2', 'city-name');
    cityName.textContent = city;

    const countryName = this.createElement('h3', 'country-name');
    countryName.textContent = country;

    const temperature = this.createElement('h2', 'temperature');
    if (units) {
      temperature.textContent = `${temp} ℉`;
    } else {
      temperature.textContent = `${temp} ℃`;
    }

    const weatherIcon = this.createElement('span');
    weatherIcon.classList.add(icon);

    const weatherText = this.createElement('p', 'weather-text');
    weatherText.textContent = wText;

    const dateAndTime = this.createElement('p', 'date-time');
    dateAndTime.textContent = dateTime;
    
    div.append(cityName, countryName, temperature, weatherIcon, weatherText, dateAndTime);
    this.leftSection.append(div);
  }

  todayAdvanceInfo(minTemp, maxTemp, sunrise, sunset, humidity, rainChance, feelsLike, wind, units) {
    while(this.advanceSection.firstChild) {
      this.advanceSection.removeChild(this.advanceSection.firstChild);
    }

    const tempDiv = this.createElement('div');

    const minTempText = this.createElement('h3');
    minTempText.textContent = 'MINIMUM';
    const minTempValue = this.createElement('p');
    if (units) {
      minTempValue.textContent = `${minTemp} ℉`;
    } else {
      minTempValue.textContent = `${minTemp} ℃`;
    }

    const maxTempText = this.createElement('h3');
    maxTempText.textContent = 'MAXIMUM';
    const maxTempValue = this.createElement('p');
    if (units) {
      maxTempValue.textContent = `${maxTemp} ℉`;
    } else {
      maxTempValue.textContent = `${maxTemp} ℃`;
    }

    const sunDiv = this.createElement('div');

    const sunriseText = this.createElement('h3');
    sunriseText.textContent = 'SUNRISE';
    const sunriseValue = this.createElement('p');
    sunriseValue.textContent = sunrise;

    const sunsetText = this.createElement('h3');
    sunsetText.textContent = 'SUNSET';
    const sunsetValue = this.createElement('p');
    sunsetValue.textContent = sunset;

    const chanceDiv = this.createElement('div');

    const humidityText = this.createElement('h3');
    humidityText.textContent = 'HUMIDITY';
    const humidityValue = this.createElement('p');
    humidityValue.textContent = `${humidity} %`;

    const rainChanceText = this.createElement('h3');
    rainChanceText.textContent = 'CHANCE OF RAIN';
    const rainChanceValue = this.createElement('p');
    rainChanceValue.textContent = `${rainChance} %`;

    const othersDiv = this.createElement('div');
    
    const feelsLikeText = this.createElement('h3');
    feelsLikeText.textContent = 'FEELS LIKE';
    const feelsLikeValue = this.createElement('p');
    if (units) {
      feelsLikeValue.textContent = `${feelsLike} ℉`;
    } else {
      feelsLikeValue.textContent = `${feelsLike} ℃`;
    }

    const windText = this.createElement('h2');
    windText.textContent = 'WIND';
    const windValue = this.createElement('p');
    if (units) {
      windValue.textContent = `${wind} mp/h`;
    } else {
      windValue.textContent = `${wind} km/h`;
    }

    tempDiv.append(minTempText, minTempValue, maxTempText, maxTempValue);
    sunDiv.append(sunriseText, sunriseValue, sunsetText, sunsetValue);
    chanceDiv.append(humidityText, humidityValue, rainChanceText, rainChanceValue);
    othersDiv.append(feelsLikeText, feelsLikeValue, windText, windValue);
    this.advanceSection.append(tempDiv, sunDiv, chanceDiv, othersDiv);
  }

  dailyForecast(allDays, days, units) {
    while(this.forecastSection.firstChild) {
      this.forecastSection.removeChild(this.forecastSection.firstChild);
    }

    for (let i = 0; i < allDays.length; i++) {
      const dailyCard = this.createElement('div', 'daily-card');

      const icon = this.getFutureIcons(allDays[i].day.condition.text);
      
      const dayName = this.createElement('h3');
      dayName.textContent = days[i];

      const weatherIcon = this.createElement('span');
      weatherIcon.classList.add(icon);

      const maxTemp = this.createElement('h3');
      if (units) {
        maxTemp.textContent = `${allDays[i].day.maxtemp_f} ℉`;
      } else {
        maxTemp.textContent = `${allDays[i].day.maxtemp_c} ℃`;
      }
      
      const minTemp = this.createElement('p');
      if (units) {
        minTemp.textContent = `${allDays[i].day.mintemp_f} ℉`;
      } else {
        minTemp.textContent = `${allDays[i].day.mintemp_c} ℃`;
      }
      

      dailyCard.append(dayName, weatherIcon, maxTemp, minTemp);

      this.forecastSection.append(dailyCard);
    }  
  }

  hourlyForecast(allHours, isDay, units) {
    while(this.forecastSection.firstChild) {
      this.forecastSection.removeChild(this.forecastSection.firstChild);
    }

    for (let i = 0; i < allHours.length; i++) {
      const hourlyCard = this.createElement('div', 'hourly-card');

      const icon = this.getIcon(allHours[i].iconText, isDay);
      
      const dayName = this.createElement('h3');
      dayName.textContent = allHours[i].hour; 

      const weatherIcon = this.createElement('span');
      weatherIcon.classList.add(icon);

      const temp = this.createElement('h3');
      if (units) {
        temp.textContent = `${allHours[i].temp_f} ℉`;
      } else {
        temp.textContent = `${allHours[i].temp_c} ℃`;
      }

      hourlyCard.append(dayName, weatherIcon, temp);

      this.forecastSection.append(hourlyCard);
    }
  }

  getIcon(text, isDay) {
    let icon;

    if (text === 'Sunny') {
      icon = 'sunny';
    } else if (text === 'Clear') {
      icon = 'night';
    } else if (text === 'Partly cloudy' && isDay === 1) {
      icon = 'partly-cloudy';
    } else if (text === 'Partly cloudy' && isDay === 0) {
      icon = 'cloudy-night';
    } else if (text === 'Overcast' || text === 'Cloudy') {
      icon = 'overcast';
    } else if (text === 'Mist' || text === 'Fog' || text === 'Freezing fog') {
      icon = 'foggy';
    } else if (text === 'Patchy rain possible' || text === 'Patchy light rain' || text === 'Light rain' ||
      text === 'Light rain shower' || text === 'Light freezing rain') {
      icon = 'rainy';
    } else if (text === 'Moderate rain at times' || text === 'Moderate rain' || text === 'Heavy rain at times' || text === 'Heavy rain' ||
      text === 'Moderate or heavy freezing rain' || text === 'Moderate or heavy rain shower' || text === 'Torrential rain shower') {
      icon = 'rain-heavy';
    } else if (text === 'Patchy light drizzle' || text === 'Light drizzle') {
      icon = 'drizzle';
    } else if (text === 'Patchy sleet possible' || text === 'Light sleet' || text === 'Light sleet showers' ||text === 'Light showers of ice pellets') {
      icon = 'sleet';
    } else if (text === text === 'Moderate or heavy sleet' || text === 'Moderate or heavy sleet showers' || text === 'Ice pellets' || 
      text === 'Moderate or heavy showers of ice pellets') {
      icon = 'hail';
    } else if (text === 'Patchy freezing drizzle possible' || text === 'Freezing drizzle' || text === 'Heavy freezing drizzle' || text === 'Heavy snow') {
      icon = 'freezing';
    } else if (text === 'Patchy snow possible' || text === 'Blowing snow' || text === 'Blizzard' || text === 'Patchy light snow' ||
      text === 'Light snow' || text === 'Patchy moderate snow' || text === 'Light snow showers' || text === 'Moderate or heavy snow showers') {
      icon = 'snow';
    } else if (text === 'Thundery outbreaks possible') {
      icon = 'thunder';
    } else if (text === 'Patchy light rain with thunder' || text === 'Moderate or heavy rain with thunder' || text === 'Patchy light snow with thunder' ||
      text === 'Moderate or heavy snow with thunder') {
      icon = 'thunder-rain';
    }

    return icon;
  }

  getFutureIcons(text) {
    let icon;

    if (text === 'Sunny') {
      icon = 'sunny';
    } else if (text === 'Partly cloudy') {
      icon = 'partly-cloudy';
    } else if (text === 'Overcast' || text === 'Cloudy') {
      icon = 'overcast';
    } else if (text === 'Mist' || text === 'Fog' || text === 'Freezing fog') {
      icon = 'foggy';
    } else if (text === 'Patchy rain possible' || text === 'Patchy light rain' || text === 'Light rain' ||
      text === 'Light rain shower' || text === 'Light freezing rain') {
      icon = 'rainy';
    } else if (text === 'Moderate rain at times' || text === 'Moderate rain' || text === 'Heavy rain at times' || text === 'Heavy rain' ||
      text === 'Moderate or heavy freezing rain' || text === 'Moderate or heavy rain shower' || text === 'Torrential rain shower') {
      icon = 'rain-heavy';
    } else if (text === 'Patchy light drizzle' || text === 'Light drizzle') {
      icon = 'drizzle';
    } else if (text === 'Patchy sleet possible' || text === 'Light sleet' || text === 'Light sleet showers' ||text === 'Light showers of ice pellets') {
      icon = 'sleet';
    } else if (text === text === 'Moderate or heavy sleet' || text === 'Moderate or heavy sleet showers' || text === 'Ice pellets' || 
      text === 'Moderate or heavy showers of ice pellets') {
      icon = 'hail';
    } else if (text === 'Patchy freezing drizzle possible' || text === 'Freezing drizzle' || text === 'Heavy freezing drizzle' || text === 'Heavy snow') {
      icon = 'freezing';
    } else if (text === 'Patchy snow possible' || text === 'Blowing snow' || text === 'Blizzard' || text === 'Patchy light snow' ||
      text === 'Light snow' || text === 'Patchy moderate snow' || text === 'Light snow showers' || text === 'Moderate or heavy snow showers') {
      icon = 'snow';
    } else if (text === 'Thundery outbreaks possible') {
      icon = 'thunder';
    } else if (text === 'Patchy light rain with thunder' || text === 'Moderate or heavy rain with thunder' || text === 'Patchy light snow with thunder' ||
      text === 'Moderate or heavy snow with thunder') {
      icon = 'thunder-rain';
    }

    return icon;
  }

  handleToggle(handler) {
    this.toggleInput.addEventListener('change', () => {
      handler(this.toggleInput.checked);
    });
  }

  handleInput(handler) {
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handler(this.input.value);

        this.input.value = '';
        this.input.blur();
      }
    })
  }

  handleChangeDailyInfo(handler) {
    this.selectForecastSection.addEventListener('click', (e) => {
      if (e.target.className === 'daily-btn') {
        handler('daily');
      } else if (e.target.className === 'hourly-btn') {
        handler('hourly');
      }
    });
  }
}