const Rest_Countries_API = 'https://restcountries.eu/rest/v2';

function fetchCountries(searchcountrie) {
  return fetch(`${Rest_Countries_API}/name/${searchcountrie}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
}

export default fetchCountries;
