const sel = (selector) => document.querySelector(selector);
// let city = 'tokyo'

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return { name: data.name, temp: data.main.temp, weather: data.weather[0].main };
}

// fetchData(url).then(console.log)
sel('#btnSend').addEventListener('click', (Event) => {
  // get city form input
  const city = sel('#city').value
  const api = '6ca8aaad293b0b0a3ad93f29e82425f8'
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`

  // display data
  fetchData(url).then(console.log)

  Event.preventDefault()
})
