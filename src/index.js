const debounce = require('lodash.debounce');
import './css/style.css';
import countryCard from './templates/countries-card.hbs';

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
};
// import API from './fetchCountries';
fetch('https://restcountries.eu/rest/v2/name/eesti')
  .then(response => {
    return response.json();
  })
  .then(country => {
    console.log(country);
    const markup = countryCard(country);
    refs.cardContainer.innerHTML = markup;
  });
