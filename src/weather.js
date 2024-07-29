function getWeatherInfo () {
 const cityInput = document.getElementById("cityInput");
 const cityName = document.getElementById("CityName");
 
}

fetch("https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&appid=f1a7f601f87c9d97579ef8237cc83ff1")
.then(res => res.json())
.then(data => { 
    const cityName = data.name;
    document.getElementById("cityName").textContent = `${cityName}`
});






function generateCurrentW (submit, getWeatherInfo) { document.getElementById('cityName')

}