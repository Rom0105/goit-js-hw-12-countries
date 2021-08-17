const debounce = require('lodash.debounce');
import './css/style.css';
import countryCard from './templates/countries-card.hbs';
import { alert } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
// import API from './fetchCountries';
const refs = {
  cardContainer: document.querySelector('.js-card-container'),
  searchInput: document.querySelector('.js-input'),
};

refs.searchInput.addEventListener('input', onSearchInput);

function onSearchInput(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const searchQuery = form.value;
  if (searchQuery !== '') {
    fetchCountriesByName(searchQuery)
      .then(creatMarkup)
      .catch(error => console.log(error));
  } else {
    clearContainer();
  }
}

alert({
  text: 'Too many matches found. Please enter a more specific query!',
});

function fetchCountriesByName(countryName) {
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`).then(response => {
    return response.json();
  });
}

function creatMarkup(country) {
  const markup = countryCard(country);
  refs.cardContainer.innerHTML = markup;
}

function clearContainer() {
  refs.cardContainer.innerHTML = '';
}
