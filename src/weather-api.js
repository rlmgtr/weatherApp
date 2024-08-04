

function weatherSourceAll () {

    function currentWeatherSource() {
        const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
        const API_KEY = "f1a7f601f87c9d97579ef8237cc83ff1";
        const cityInput = document.getElementById('cityInput').value;
    
        const currentWeatherSourceURL = `${BASE_URL}?q=${cityInput}&appid=${API_KEY}`;
    
        fetch(currentWeatherSourceURL)
            .then(res => res.json())
            .then(data => {
                document.getElementById('cityName').textContent = `${data.name}`;
                document.getElementById('temp').textContent = `${data.main.temp}`;
                document.getElementById('min').textContent = `${data.main.temp_min}`;
                document.getElementById('max').textContent = `${data.main.temp_max}`;
            })
            .catch(error => {
                console.error('Error fetching the weather data:', error);
            });
    
        return false; // Prevent form submission
    }



    function fiveDaysWeatherSource () {
        const BASE_URLfive = "https://api.openweathermap.org/data/2.5/forecast";
        const API_KEYfive = "f1a7f601f87c9d97579ef8237cc83ff1";
        const cityInput = document.getElementById('cityInput').value;

        const fiveDaysWeatherSource = `${BASE_URLfive}?q=${cityInput}&appid=${API_KEYfive}`;
    

    }

}

