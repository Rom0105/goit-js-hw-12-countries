import { cardContainer, searchInput, form } from './refs';
import debounce from 'lodash/debounce';
import fetchCountries from './fetchCountries.js';
import updateCountriesList from './update-countries.js';

searchInput.addEventListener('input', debounce(onSearchInput, 500));
form.addEventListener('submit', event => {
  event.preventDefault();
});

function onSearchInput(event) {
  const searchQuery = event.target.value;

  clearMarkup();

  fetchCountries(searchQuery).then(updateCountriesList);

  cardContainer.addEventListener('click', searchResults);
}

function searchResults(event) {
  if (!event.target.classList.contains('js-list-title')) {
    return;
  }
  searchInput.value = event.target.textContent;

  clearMarkup();

  fetchCountries(searchInput.value).then(updateCountriesList);

  searchInput.value = '';
  cardContainer.removeEventListener('click', searchResults);
}

function clearMarkup() {
  cardContainer.innerHTML = '';
}
