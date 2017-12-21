const cityData = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(cityData)
  .then(data => data.json())
  .then(data => cities.push(...data))

function filterCities(typedInWord, cities) {
  return cities.filter(place => {
    const regex = new RegExp(typedInWord, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })
}

function displayCities() {
  const matchCities = filterCities(this.value, cities)
  const html = matchCities.map(place => {
    const regex = new RegExp(this.value, 'gi')
    const markedCity = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const markedState = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
    return `
    <li>
      <span class="name">${markedCity}, ${markedState}</span>
      <span class="population">${place.population}</span>
    </li>
    `
  }).join('');
  suggestions.innerHTML = html
}

const searchInput = document.querySelector('#searchInput')
const suggestions = document.querySelector('#suggestions')

searchInput.addEventListener('change', displayCities)
searchInput.addEventListener('keyup', displayCities)
