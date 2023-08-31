function loadLocation(Location){
    const topLeft = document.querySelector('.top-left');
    const topRight = document.querySelector('.top-right');
    

    getData(Location).then((resJSON) => {
        console.log(resJSON)
        if (resJSON.error != undefined){
            alert('No Result Found')
            return;
        }
        topLeft.innerHTML = ''
        topRight.innerHTML = ''
        const time = document.createElement('p');
        const temp = document.createElement('p');
        
        const searchbox = document.createElement('div');
        searchbox.style="height: 30px;max-width: 200px;display: flex;justify-content: space-between;align-items: center;border-bottom: 2px solid black";
        const inputText = document.createElement('input');
        inputText.placeholder = "Search Location..."
        inputText.style = "height: 100%;flex-shrink: 2;max-width: 150px;background-color: rgba(0,0,0,0);border: none;font-size: 15px;font-weight: 600;"
        const searchIcon = document.createElement('div')
        searchIcon.style = "height: 18px;min-width: 18px;background-image: url(../assets/search.svg);background-size: contain;background-repeat: no-repeat;cursor: pointer;"
        searchIcon.addEventListener('click', () => {
            if (inputText.value === ''){
                alert('Please type a location')
                return;
            }
            loadLocation(inputText.value)
        })
        searchbox.appendChild(inputText); searchbox.appendChild(searchIcon);
        temp.textContent = resJSON.current.temp_c + ' °C';
        temp.classList.add('temp')
        time.textContent = resJSON.location.localtime;
        time.style = "font-size:15px";
        const condition = document.createElement('p');
        condition.classList.add('condition');
        condition.textContent = resJSON.current.condition.text;
        const location = document.createElement('p');
        location.textContent = resJSON.location.country + ', '+resJSON.location.name
        location.style="font-size:15px";
        const windspeed = document.createElement('div')
        windspeed.classList.add('wind-text','justify-content-start', 'pe-3')
        windspeed.innerHTML = `<img src='../assets/wind.svg' style='width:40px !important;height:60px !important'><div><p class='mb-0'>Wind Speed</p><p class='mb-0' style='font-size:30px;font-weight:500'>${resJSON.current.wind_kph} Kp/h</p></div>`
        const feelsLike = document.createElement('div');
        feelsLike.classList.add('wind-text','justify-content-start', 'pe-3')
        feelsLike.innerHTML = `<img src='../assets/thermometer-sun.svg' style='width:50px !important;height:60px !important;'><div><p class='mb-0'>Feels Like</p><p class='mb-2' style='font-size:30px;font-weight:500'>${resJSON.current.feelslike_c}  °C</p></div>`
        const humidity = document.createElement('div')
        humidity.classList.add('ano-text','justify-content-start', 'pe-3')
        humidity.innerHTML = `<img src='../assets/humidity.png' style='width:40px !important;height:50px !important;'><div><p class='mb-0'>Humidity</p><p class='mb-2' style='font-size:30px;font-weight:500'>${resJSON.current.humidity}  %</p></div>`
        const rainChance = document.createElement('div')
        rainChance.classList.add('ano-text','justify-content-start', 'pe-3')
        rainChance.innerHTML = `<img src='../assets/rain.png' style='width:43px !important;height:44px !important;'><div><p class='mb-0'>Chance of Rain</p><p class='mb-2' style='font-size:30px;font-weight:500'>${resJSON.forecast.forecastday[0].day.daily_chance_of_rain}  %</p></div>`
        topRight.appendChild(feelsLike)
        topRight.appendChild(humidity)
        topRight.appendChild(rainChance)
        topRight.appendChild(windspeed)
        topLeft.appendChild(condition)
        topLeft.appendChild(location)
        topLeft.appendChild(time)
        topLeft.appendChild(temp)
        topLeft.appendChild(searchbox);
    })
}

loadLocation('auckland')
//getData('iceland')

async function getData(Location){
    try {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=534ae84322ca47e78ba194913233008&q=${Location}&days=3`, {mode: 'cors'});
    let resJSON = await response.json();
    console.log(resJSON)
    return (resJSON);
    // console.log(new Date().g)
    // console.log(new Date().getDate() + 2)
    }
    catch (e){
        alert('no result found')
        return (null);
    }
}