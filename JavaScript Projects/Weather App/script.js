
document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-btn");
    const cityInput = document.getElementById("city");
    const resultElement = document.getElementById("result");

    searchButton.addEventListener("click", () => {
        const city = cityInput.value;

        // Replace 'YOUR_API_KEY' with your actual API key
        const apiKey = '931efd704ffdb09d8c0d24f440186f18';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const { name, sys, main, weather } = data;
                const temperature = main.temp;
                const description = weather[0].description;
                const country = sys.country;

                const weatherInfo = `
                    <h2>${name}, ${country}</h2>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Description: ${description}</p>
                `;

                resultElement.innerHTML = weatherInfo;
            })
            .catch(error => {
                console.error("Error fetching weather data: ", error);
            });
    });
});
