let api = '6ca8aaad293b0b0a3ad93f29e82425f8'
let city = 'tokyo'
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`

function handleError(fx) {
  return function (...params) {
    return fx(...params).catch(
      function (error) {
        console.warn('Something goes wrong:', error)
      }
    )
  }
}

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return { name: data.name, temp: data.main.temp };
}

fetchData(url).then(console.log)
