const container = document.createElement("div");
container.className = "container";
document.body.append(container);

async function getCountries() {
  try {
    let restCountries = await fetch("https://restcountries.com/v3.1/all");
    let countryData = await restCountries.json();
    console.log(countryData);

    countryData.forEach((country) => {
      const card = document.createElement("div");
      card.className = "card"
      card.className = "mt-5"
      card.style = "width: 18rem; text-align: center; border:1px solid gray;";

      card.innerHTML = `<h5 class="card-head">${country.name.common}</h5>
                  <img src="${country.flags.png}" class="card-img-top" alt="...">
                  <div class="card-body">
                  <h6 class="card-title">Capital:  ${country.capital}</h6>
                  <h6 class="card-title">Region:  ${country.region}</h6>
                  <h6 class="card-title">Country Code:  ${country.borders}</h6>
                  <button onclick="getWeather('${country.name.common}')" class="btn btn-warning ">Click for Weather</button>
                  </div>
  `;
      container.appendChild(card);
    });
  } catch (err) {
    console.log(err);
  }
}

getCountries();


async function getWeather(countryName) {
  try {
       let fetchWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=cbaac264b1a3bdf7099d6b56f3d31bd3`
    );
       let dataWeather = fetchWeather.json();
          console.log(dataWeather);

       dataWeather.then(function (data) {
          alert(`The ${countryName} Temperature is : ${data.main.temp}`);
    });
  } catch (err) {
    console.log(err);
  }
}
