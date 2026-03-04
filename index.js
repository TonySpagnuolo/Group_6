const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "8e2d81f77bf781eee278d91811303875";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if (city){
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);  
        }
        catch (error){
            console.error(error);
            displayError(error);
        }
    }
    else {
        displayError("Please enter a city");
    }

});

async function getWeatherData(city){

}

function displayWeatherInfo(data){

}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}