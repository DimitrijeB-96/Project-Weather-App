export class View {
  constructor() {
    this.root = document.querySelector(':root');
    this.rootStyles = getComputedStyle(this.root);

    this.invalidColor = this.rootStyles.getPropertyValue('--invalid-color');

    this.sunnyBackground = this.rootStyles.getPropertyValue('--sunny-background');
    this.sunnyPlate = this.rootStyles.getPropertyValue('--sunny-plate');
    this.sunnyShadow = this.rootStyles.getPropertyValue('--sunny-shadow');

    this.cloudyBackground = this.rootStyles.getPropertyValue('--cloudy-background');
    this.cloudyPlate = this.rootStyles.getPropertyValue('--cloudy-plate');
    this.cloudyShadow = this.rootStyles.getPropertyValue('--cloudy-shadow');

    this.nightBackground = this.rootStyles.getPropertyValue('--night-background');
    this.nightPlate = this.rootStyles.getPropertyValue('--night-plate');
    this.nightShadow = this.rootStyles.getPropertyValue('--night-shadow');

    this.thunderBackground = this.rootStyles.getPropertyValue('--thunder-background');
    this.thunderPlate = this.rootStyles.getPropertyValue('--thunder-plate');
    this.thunderShadow = this.rootStyles.getPropertyValue('--thunder-shadow');

    this.coldBackground = this.rootStyles.getPropertyValue('--cold-background');
    this.coldPlate = this.rootStyles.getPropertyValue('--cold-plate');
    this.coldShadow = this.rootStyles.getPropertyValue('--cold-shadow');

    this.topContainer = this.createElement('div', 'top-container');
    this.bottomContainer = this.createElement('div', 'bottom-container');

    this.leftSection = this.createElement('div', 'left-section');
    this.centralSection = this.createElement('div', 'central-section');

    this.toggleSection = this.createElement('div', 'toggle-section');
    this.searchSection = this.createElement('div', 'search-section');
    this.advanceSection = this.createElement('div', 'advance-section');

    this.selectForecastSection = this.createElement('div', 'select-forecast-section');
    this.forecastSection = this.createElement('div', 'forecast-section');

    this.titleAndDateDiv = this.createElement('div', 'title-day');

    this.title = this.createElement('h1', 'title');
    this.title.textContent = 'Weather APP';

    this.toggleInput = this.createElement('input', 'input-toggle');
    this.toggleInput.type = 'checkbox';

    this.inputLabel = this.createElement('label', 'input-label');
    this.inputLabel.htmlFor = 'search-input';
    this.inputLabel.textContent = 'Search';

    this.input = this.createElement('input');
    this.input.id = 'search-input';
    this.input.type = 'text';
    this.input.placeholder = '';

    this.inputErrorDisplay = this.createElement('p', 'error-input');
    this.inputErrorDisplay.style.display = 'none';

    this.hourlyBtn = this.createElement('button', 'hourly-btn');
    this.hourlyBtn.type = 'button';
    this.hourlyBtn.textContent = 'Hourly'

    this.dailyBtn = this.createElement('button', 'daily-btn');
    this.dailyBtn.type = 'button';
    this.dailyBtn.textContent = 'Daily'

    this.dailyNote = this.createElement('h2', 'daily-note');
    this.dailyNote.textContent = 'NOTE: Free Weather API can display only 3 days Forecast in advance.';

    this.titleAndDateDiv.append(this.title);
    this.toggleSection.append(this.titleAndDateDiv, this.toggleInput);
    this.searchSection.append(this.input, this.inputLabel, this.inputErrorDisplay);

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

  displayTodayDateAndDay(days, date) {
    if (this.titleAndDateDiv.contains(document.querySelector('.date-time'))) {
      this.titleAndDateDiv.removeChild(document.querySelector('.date-time'));
    }

    const dayAndDate = this.createElement('h1', 'date-time');
    dayAndDate.textContent = `${days[0]} - ${date}`;

    this.titleAndDateDiv.append(dayAndDate);
  }

  todayWeatherCard(forecast, city, currentTime, units) {
    while (this.leftSection.firstChild) {
      this.leftSection.removeChild(this.leftSection.firstChild);
    }

    this.inputErrorDisplay.style.display = 'none';
    this.inputLabel.style.color = this.coldBackground;

    const icon = this.getIcon(forecast.current.condition.text, forecast.current.is_day);
    
    const div = this.createElement('div', 'today-card');
    
    const cityName = this.createElement('h2', 'city-name');
    cityName.textContent = city;

    const countryName = this.createElement('h3', 'country-name');
    countryName.textContent = forecast.location.country;

    const temperature = this.createElement('h2', 'temperature');
    if (units) {
      temperature.textContent = `${forecast.current.temp_f} °F`;
    } else {
      temperature.textContent = `${forecast.current.temp_c} °C`;
    }

    const weatherIcon = this.createElement('span');
    weatherIcon.classList.add(icon);

    const weatherText = this.createElement('p', 'weather-text');
    weatherText.textContent = forecast.current.condition.text;

    const time = this.createElement('p', 'current-time');
    time.textContent = currentTime;
    
    div.append(cityName, countryName, temperature, weatherIcon, weatherText, time);
    this.leftSection.append(div);
  }

  todayAdvanceInfo(astronomy, forecast, units) {
    while(this.advanceSection.firstChild) {
      this.advanceSection.removeChild(this.advanceSection.firstChild);
    }

    const tempDiv = this.createElement('div');

    const minTempText = this.createElement('h3');
    minTempText.textContent = 'MINIMUM';
    const minTempValue = this.createElement('p');
    if (units) {
      minTempValue.textContent = `${forecast.forecast.forecastday[0].day.mintemp_f} °F`;
    } else {
      minTempValue.textContent = `${forecast.forecast.forecastday[0].day.mintemp_c} °C`;
    }

    const maxTempText = this.createElement('h3');
    maxTempText.textContent = 'MAXIMUM';
    const maxTempValue = this.createElement('p');
    if (units) {
      maxTempValue.textContent = `${forecast.forecast.forecastday[0].day.maxtemp_f} °F`;
    } else {
      maxTempValue.textContent = `${forecast.forecast.forecastday[0].day.maxtemp_c} °C`;
    }

    const sunDiv = this.createElement('div');

    const sunriseText = this.createElement('h3');
    sunriseText.textContent = 'SUNRISE';
    const sunriseValue = this.createElement('p');
    sunriseValue.textContent = astronomy.astronomy.astro.sunrise;

    const sunsetText = this.createElement('h3');
    sunsetText.textContent = 'SUNSET';
    const sunsetValue = this.createElement('p');
    sunsetValue.textContent = astronomy.astronomy.astro.sunset;

    const chanceDiv = this.createElement('div');

    const humidityText = this.createElement('h3');
    humidityText.textContent = 'HUMIDITY';
    const humidityValue = this.createElement('p');
    humidityValue.textContent = `${forecast.current.humidity} %`;

    const rainChanceText = this.createElement('h3');
    rainChanceText.textContent = 'CHANCE OF RAIN';
    const rainChanceValue = this.createElement('p');
    rainChanceValue.textContent = `${forecast.forecast.forecastday[0].day.daily_chance_of_rain} %`;

    const othersDiv = this.createElement('div');
    
    const feelsLikeText = this.createElement('h3');
    feelsLikeText.textContent = 'FEELS LIKE';
    const feelsLikeValue = this.createElement('p');
    if (units) {
      feelsLikeValue.textContent = `${forecast.current.feelslike_f} °F`;
    } else {
      feelsLikeValue.textContent = `${forecast.current.feelslike_c} °C`;
    }

    const windText = this.createElement('h2');
    windText.textContent = 'WIND';
    const windValue = this.createElement('p');
    if (units) {
      windValue.textContent = `${forecast.current.wind_mph} mp/h`;
    } else {
      windValue.textContent = `${forecast.current.wind_kph} km/h`;
    }

    tempDiv.append(minTempText, minTempValue, maxTempText, maxTempValue);
    sunDiv.append(sunriseText, sunriseValue, sunsetText, sunsetValue);
    chanceDiv.append(humidityText, humidityValue, rainChanceText, rainChanceValue);
    othersDiv.append(feelsLikeText, feelsLikeValue, windText, windValue);
    this.advanceSection.append(tempDiv, sunDiv, chanceDiv, othersDiv);
  }

  dailyForecast(forecastdays, days, units) {
    while(this.forecastSection.firstChild) {
      this.forecastSection.removeChild(this.forecastSection.firstChild);
    }

    for (let i = 0; i < forecastdays.length; i++) {
      const dailyCard = this.createElement('div', 'daily-card');

      const icon = this.getFutureIcons(forecastdays[i].day.condition.text);
      
      const dayName = this.createElement('h3');
      dayName.textContent = days[i];

      const weatherIcon = this.createElement('span');
      weatherIcon.classList.add(icon);

      const maxTemp = this.createElement('h3');
      if (units) {
        maxTemp.textContent = `${forecastdays[i].day.maxtemp_f} °F`;
      } else {
        maxTemp.textContent = `${forecastdays[i].day.maxtemp_c} °C`;
      }
      
      const minTemp = this.createElement('p');
      if (units) {
        minTemp.textContent = `${forecastdays[i].day.mintemp_f} °F`;
      } else {
        minTemp.textContent = `${forecastdays[i].day.mintemp_c} °C`;
      }     

      dailyCard.append(dayName, weatherIcon, maxTemp, minTemp);

      this.forecastSection.append(dailyCard);
    }
  }

  hourlyForecast(forecast, hours, units) {
    while(this.forecastSection.firstChild) {
      this.forecastSection.removeChild(this.forecastSection.firstChild);
    }

    for (let i = 0; i < hours.length; i++) {
      const hourlyCard = this.createElement('div', 'hourly-card');

      const icon = this.getIcon(hours[i].iconText, forecast.current.is_day);
      
      const dayName = this.createElement('h3');
      dayName.textContent = hours[i].hour; 

      const weatherIcon = this.createElement('span');
      weatherIcon.classList.add(icon);

      const temp = this.createElement('h3');
      if (units) {
        temp.textContent = `${hours[i].temp_f} °F`;
      } else {
        temp.textContent = `${hours[i].temp_c} °C`;
      }

      hourlyCard.append(dayName, weatherIcon, temp);

      this.forecastSection.append(hourlyCard);
    }
  }

  // Include night time
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
    } else if (text === 'Cloudy' || text === 'Overcast') {
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
    } else if (text === 'Patchy sleet possible' || text === 'Light sleet' || text === 'Light sleet showers' || text === 'Light showers of ice pellets') {
      icon = 'sleet';
    } else if (text === 'Moderate or heavy sleet' || text === 'Moderate or heavy sleet showers' || text === 'Ice pellets' || 
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

  // Doesn't include night time
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
    } else if (text === 'Patchy sleet possible' || text === 'Light sleet' || text === 'Light sleet showers' || text === 'Light showers of ice pellets') {
      icon = 'sleet';
    } else if (text === 'Moderate or heavy sleet' || text === 'Moderate or heavy sleet showers' || text === 'Ice pellets' || 
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
      }
    })
  }

  handleChangeDailyInfo(handler) {
    this.selectForecastSection.addEventListener('click', (e) => {
      if (e.target.className === 'daily-btn') {
        this.selectForecastSection.append(this.dailyNote);
        handler('daily');
      } else if (e.target.className === 'hourly-btn') {
        if (this.dailyNote) {
          this.selectForecastSection.removeChild(this.dailyNote);
        }
        handler('hourly');
      }
    });
  }

  handleDisplayedColors(forecast, isHourly) {
    const text = this.getIcon(forecast.current.condition.text, forecast.current.is_day);
    
    const dateAndDay = document.querySelector('.date-time');
    dateAndDay.style.color = this.coldBackground;

    // --cold-background and --font-color use same hex color.
    this.title.style.color = this.coldBackground;
    this.inputLabel.style.color = this.coldBackground;
    this.input.style.color = this.coldBackground;
    this.dailyNote.style.color = this.coldBackground;
    
    if (text === 'sunny') {
      this.getColors(this.sunnyBackground, this.sunnyPlate, this.sunnyShadow, isHourly);
    } else if (text === 'partly-cloudy') {
      this.getColors(this.sunnyBackground, this.coldPlate, this.cloudyShadow, isHourly);
    } else if (text === 'night') {
      this.getColors(this.nightBackground, this.nightPlate, this.nightShadow, isHourly);
    } else if (text === 'cloudy-night') {
      this.getColors(this.nightBackground, this.coldPlate, this.cloudyShadow, isHourly);
    } else if (text === 'rainy' || text === 'rain-heavy' || text === 'drizzle' || text === 'overcast') {
      this.getColors(this.cloudyBackground, this.cloudyPlate, this.cloudyShadow, isHourly);
    } else if (text === 'thunder' || text === 'thunder-rain') {
      this.getColors(this.thunderBackground, this.thunderPlate, this.thunderShadow, isHourly);
    } else if (text === 'snow' || text === 'freezing' || text === 'hail' || text === 'sleet' || text === 'foggy') {
      this.getColors(this.coldBackground, this.coldPlate, this.coldShadow, isHourly);
      this.title.style.color = this.coldPlate;
      this.inputLabel.style.color = this.coldPlate;
      this.input.style.color = this.coldShadow;
      this.dailyNote.style.color = this.coldShadow;
      dateAndDay.style.color = this.coldShadow;
    }
  }

  getColors(background, plate, shadow, isHourly) {
    document.body.style.backgroundColor = background;

    const todayCard = document.querySelector('.today-card');
    todayCard.style.backgroundColor = plate;
    todayCard.style.boxShadow = `8px 8px 0 0 ${shadow}`;

    this.input.style.borderBottom = `4px solid ${shadow}`;

    this.advanceSection.style.backgroundColor = plate;
    this.advanceSection.style.boxShadow = `8px 8px 0 0 ${shadow}`;

    this.forecastSection.style.backgroundColor = plate;
    this.forecastSection.style.boxShadow = `8px 8px 0 0 ${shadow}`;

    if (isHourly) {
      this.hourlyBtn.style.backgroundColor = plate;
      this.dailyBtn.style.backgroundColor = shadow;
    } else {
      this.hourlyBtn.style.backgroundColor = shadow;
      this.dailyBtn.style.backgroundColor = plate;
    }
  }

  btnColors(forecast, clickedBtn, notClickedBtn) {
    const text = this.getIcon(forecast.current.condition.text, forecast.current.is_day);

    if (clickedBtn === 'hourly') {
      clickedBtn = this.hourlyBtn;
      notClickedBtn = this.dailyBtn;
    } else if (clickedBtn === 'daily') {
      clickedBtn = this.dailyBtn;
      notClickedBtn = this.hourlyBtn;
    }

    if (text === 'sunny') {
      clickedBtn.style.backgroundColor = this.sunnyPlate;
      notClickedBtn.style.backgroundColor = this.sunnyShadow;
    } else if (text === 'partly-cloudy') {
      clickedBtn.style.backgroundColor = this.coldPlate;
      notClickedBtn.style.backgroundColor = this.cloudyShadow;
    } else if (text === 'cloudy-night' || text === 'night') {
      clickedBtn.style.backgroundColor = this.coldPlate;
      notClickedBtn.style.backgroundColor = this.cloudyShadow;

    } else if (text === 'rainy' || text === 'rain-heavy' || text === 'drizzle' || text === 'overcast') {
      clickedBtn.style.backgroundColor = this.cloudyPlate;
      notClickedBtn.style.backgroundColor = this.cloudyShadow;
    } else if (text === 'thunder' || text === 'thunder-rain') {
      clickedBtn.style.backgroundColor = this.thunderPlate;
      notClickedBtn.style.backgroundColor = this.thunderShadow;
    } else if (text === 'snow' || text === 'freezing' || text === 'hail' || text === 'sleet' || text === 'foggy') {
      clickedBtn.style.backgroundColor = this.coldPlate;
      notClickedBtn.style.backgroundColor = this.coldShadow;
    }
  }

  toggleBtnColor(forecast) {
    const text = this.getIcon(forecast.current.condition.text, forecast.current.is_day);

    if (text === 'sunny') {
      this.toggleInput.style.setProperty('--toggle-background', this.sunnyPlate);
      this.toggleInput.style.setProperty('--toggle-circle', this.sunnyShadow);
    } else if (text === 'partly-cloudy') {
      this.toggleInput.style.setProperty('--toggle-background', this.coldPlate);
      this.toggleInput.style.setProperty('--toggle-circle', this.cloudyShadow);
    } else if (text === 'night') {
      this.toggleInput.style.setProperty('--toggle-background', this.nightPlate);
      this.toggleInput.style.setProperty('--toggle-circle', this.nightShadow);
    } else if (text === 'cloudy-night') {
      this.toggleInput.style.setProperty('--toggle-background', this.coldPlate);
      this.toggleInput.style.setProperty('--toggle-circle', this.cloudyShadow);
    } else if (text === 'rainy' || text === 'rain-heavy' || text === 'drizzle' || text === 'overcast') {
      this.toggleInput.style.setProperty('--toggle-background', this.cloudyPlate);
      this.toggleInput.style.setProperty('--toggle-circle', this.cloudyShadow);
    } else if (text === 'thunder' || text === 'thunder-rain') {
      this.toggleInput.style.setProperty('--toggle-background', this.thunderPlate);
      this.toggleInput.style.setProperty('--toggle-circle', this.thunderShadow);
    } else if (text === 'snow' || text === 'freezing' || text === 'hail' || text === 'sleet' || text === 'foggy') {
      this.toggleInput.style.setProperty('--toggle-background', this.coldPlate);
      this.toggleInput.style.setProperty('--toggle-circle', this.coldShadow);
    }
  }

  handleInvalidLocationInput(errorCode) {
    this.inputErrorDisplay.style.display = 'inline';

    this.input.style.borderColor = this.invalidColor;
    this.inputLabel.style.color = this.invalidColor;

    if (errorCode === 1003) {
      this.inputErrorDisplay.textContent = `Please enter location.`;
    } else if (errorCode === 1006) {
      this.inputErrorDisplay.textContent = `This location doesn't exist in our database!`;
    }
  }

  pageWhenError(text, status, errorCode) {
    while(document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    const div = this.createElement('div');

    const displayErrorTitle = this.createElement('h1', 'error-title');
    displayErrorTitle.textContent = text;

    const displayCodes = this.createElement('h2', 'error-codes');
    displayCodes.textContent = `HTTP Status Code ${status}, Error Code ${errorCode}`;

    div.append(displayErrorTitle, displayCodes);
    document.body.append(div);
  }
}