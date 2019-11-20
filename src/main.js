// import {Placeholder} from './back.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
// import { WeatherService } from './../src/back.js';
$(document).ready(function() {
  $('#number').click(function() {
    const city = $('#location').val();
    $('#location').val("");
    const color = $('#color').val();
    $('#color').val("");
    const manufacturer = $('#manufacturer').val();
    $('#manufacturer').val("");
    console.log(city);
    console.log(color);
    console.log(manufacturer);


   // const getElements = function(response) {
   //    $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
   //    $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    // }
  });
});
