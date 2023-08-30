import './style.css';

import { Controller } from './controller.js';
import { Model } from './model.js';
import { View } from './view.js';

// Make Novi Sad default location to load on page load
// Input for searching location
// Toggle Fahrenheit-Celsius
// Make background color-picture respond to weather condition
// add Giphy ?

const app = new Controller(new Model(), new View());


