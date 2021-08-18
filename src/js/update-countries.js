import countryCard from '../templates/countries-card.hbs';
import countryList from '../templates/countries-list.hbs';
import { cardContainer } from './refs.js';
import { alert, info, success, error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

function updateCountriesList(data) {
  const markupCountries = countryCard(data);
  const markupCountrie = countryList(data);

  if (data.status === 404) {
    error({
      text: 'Nothing found ☹',
      delay: 2000,
    });
  }
  if (data.length === 1) {
    cardContainer.insertAdjacentHTML('beforeend', markupCountries);
    return;
  }

  if (data.length > 10) {
    error({
      text: 'Too many matches found. Please enter a more specific query!',
      delay: 2000,
    });
    return;
  }
  cardContainer.insertAdjacentHTML('beforeend', markupCountrie);
}

export default updateCountriesList;
