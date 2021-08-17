const Rest_Countries_API = 'https://restcountries.eu/rest/v2';

function fetchCountries(name) {
  return fetch(`${Rest_Countries_API}/name/${name}`).then(response => response.json());
}

export default { fetchCountries };
