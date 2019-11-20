// import {BikeService} from './back.js';
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

    fetch(`http://bikeindex.org/api/v3/search/count?distance=${city}&color=${color}&manufacturer=${manufacturer}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonifiedResponse) {
        getElements(jsonifiedResponse);
      });


   const getElements = function(response) {
      $('.showNumber').text(`The number of stolen bikes is ${response.proximity}`);
    };
  });
});
