/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
        searchbox.style="height: 30px;max-width: 200px;display: flex;justify-content: space-between;align-items: center;border-bottom: 2px solid black; margin-top:90px";
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
        time.style = "font-size:20px";
        const condition = document.createElement('p');
        condition.classList.add('condition');
        condition.textContent = resJSON.current.condition.text;
        const location = document.createElement('p');
        location.textContent = resJSON.location.country + ', '+resJSON.location.name
        location.style="font-size:20px";
        const windspeed = document.createElement('div')
        windspeed.classList.add('wind-text')
        windspeed.innerHTML = `<img src='../assets/wind.svg' style='width:40px !important;height:60px !important'><div><p class='mb-0'>Wind Speed</p><p class='mb-0' style='font-size:30px;font-weight:700'>${resJSON.current.wind_kph} Kp/h</p></div>`
        const feelsLike = document.createElement('div');
        feelsLike.classList.add('wind-text')
        feelsLike.innerHTML = `<img src='../assets/thermometer-sun.svg' style='width:50px !important;height:60px !important;'><div><p class='mb-0'>Feels Like</p><p class='mb-2' style='font-size:30px;font-weight:700'>${resJSON.current.feelslike_c}  °C</p></div>`
        const humidity = document.createElement('div')
        humidity.classList.add('ano-text')
        humidity.innerHTML = `<img src='../assets/humidity.png' style='width:40px !important;height:50px !important;'><div><p class='mb-0'>Humidity</p><p class='mb-2' style='font-size:30px;font-weight:700'>${resJSON.current.humidity}  %</p></div>`
        const rainChance = document.createElement('div')
        rainChance.classList.add('ano-text')
        rainChance.innerHTML = `<img src='../assets/rain.png' style='width:43px !important;height:44px !important;'><div><p class='mb-0'>Chance of Rain</p><p class='mb-2' style='font-size:30px;font-weight:700'>${resJSON.forecast.forecastday[0].day.daily_chance_of_rain}  %</p></div>`
        topRight.appendChild(feelsLike)
        topRight.appendChild(humidity)
        topRight.appendChild(rainChance)
        topRight.appendChild(windspeed)
        topLeft.appendChild(condition)
        topLeft.appendChild(location)
        topLeft.appendChild(time)
        topLeft.appendChild(temp)
        topLeft.appendChild(searchbox);

        const actWeather = document.querySelector('.actWeather');
        actWeather.innerHTML = ''
        for (let i = 0 ; i < 3 ; i++){
            const currDay = document.createElement('div')
            currDay.style = "display:flex; flex-direction:column;justify-content:center"
            const dateDay = document.createElement('p');
            const tempDay = document.createElement('p');
            dateDay.classList.add('fs-5')
            tempDay.classList.add('text-center', 'fs-2', 'fw-bolder')
            const conditionDay = document.createElement('img')
            dateDay.textContent = resJSON.forecast.forecastday[i].date
            tempDay.textContent = Math.round(resJSON.forecast.forecastday[i].day.avgtemp_c) + ' °C'
            conditionDay.src = (('https:')+resJSON.forecast.forecastday[i].day.condition.icon);
            currDay.appendChild(dateDay);
            currDay.appendChild(tempDay);
            currDay.appendChild(conditionDay);
            actWeather.appendChild(currDay);
        }  
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxpQkFBaUIsY0FBYywrQkFBK0Isb0JBQW9CLGdDQUFnQztBQUN4SjtBQUNBO0FBQ0Esd0NBQXdDLGVBQWUsaUJBQWlCLGdDQUFnQyxhQUFhLGdCQUFnQixpQkFBaUI7QUFDdEo7QUFDQSx5Q0FBeUMsZ0JBQWdCLDRDQUE0Qyx5QkFBeUIsNkJBQTZCLGdCQUFnQjtBQUMzSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRixpR0FBaUcsbUJBQW1CLDBCQUEwQjtBQUN4TztBQUNBO0FBQ0EscUdBQXFHLHVCQUF1QiwyRUFBMkUsbUJBQW1CLDhCQUE4QjtBQUN4UDtBQUNBO0FBQ0EsNkZBQTZGLHVCQUF1Qix5RUFBeUUsbUJBQW1CLDJCQUEyQjtBQUMzTztBQUNBO0FBQ0EsMkZBQTJGLHVCQUF1QiwrRUFBK0UsbUJBQW1CLDJEQUEyRDtBQUMvUTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0EsMkNBQTJDLHNCQUFzQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvSEFBb0gsU0FBUyxXQUFXLGFBQWE7QUFDcko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbG9hZExvY2F0aW9uKExvY2F0aW9uKXtcbiAgICBjb25zdCB0b3BMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1sZWZ0Jyk7XG4gICAgY29uc3QgdG9wUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLXJpZ2h0Jyk7XG4gICAgXG5cbiAgICBnZXREYXRhKExvY2F0aW9uKS50aGVuKChyZXNKU09OKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc0pTT04pXG4gICAgICAgIGlmIChyZXNKU09OLmVycm9yICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBhbGVydCgnTm8gUmVzdWx0IEZvdW5kJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0b3BMZWZ0LmlubmVySFRNTCA9ICcnXG4gICAgICAgIHRvcFJpZ2h0LmlubmVySFRNTCA9ICcnXG4gICAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzZWFyY2hib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2VhcmNoYm94LnN0eWxlPVwiaGVpZ2h0OiAzMHB4O21heC13aWR0aDogMjAwcHg7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6IGNlbnRlcjtib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7IG1hcmdpbi10b3A6OTBweFwiO1xuICAgICAgICBjb25zdCBpbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dFRleHQucGxhY2Vob2xkZXIgPSBcIlNlYXJjaCBMb2NhdGlvbi4uLlwiXG4gICAgICAgIGlucHV0VGV4dC5zdHlsZSA9IFwiaGVpZ2h0OiAxMDAlO2ZsZXgtc2hyaW5rOiAyO21heC13aWR0aDogMTUwcHg7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtib3JkZXI6IG5vbmU7Zm9udC1zaXplOiAxNXB4O2ZvbnQtd2VpZ2h0OiA2MDA7XCJcbiAgICAgICAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHNlYXJjaEljb24uc3R5bGUgPSBcImhlaWdodDogMThweDttaW4td2lkdGg6IDE4cHg7YmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9zZWFyY2guc3ZnKTtiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtjdXJzb3I6IHBvaW50ZXI7XCJcbiAgICAgICAgc2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbnB1dFRleHQudmFsdWUgPT09ICcnKXtcbiAgICAgICAgICAgICAgICBhbGVydCgnUGxlYXNlIHR5cGUgYSBsb2NhdGlvbicpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9hZExvY2F0aW9uKGlucHV0VGV4dC52YWx1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgc2VhcmNoYm94LmFwcGVuZENoaWxkKGlucHV0VGV4dCk7IHNlYXJjaGJveC5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IHJlc0pTT04uY3VycmVudC50ZW1wX2MgKyAnIMKwQyc7XG4gICAgICAgIHRlbXAuY2xhc3NMaXN0LmFkZCgndGVtcCcpXG4gICAgICAgIHRpbWUudGV4dENvbnRlbnQgPSByZXNKU09OLmxvY2F0aW9uLmxvY2FsdGltZTtcbiAgICAgICAgdGltZS5zdHlsZSA9IFwiZm9udC1zaXplOjIwcHhcIjtcbiAgICAgICAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25kaXRpb24uY2xhc3NMaXN0LmFkZCgnY29uZGl0aW9uJyk7XG4gICAgICAgIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IHJlc0pTT04uY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gcmVzSlNPTi5sb2NhdGlvbi5jb3VudHJ5ICsgJywgJytyZXNKU09OLmxvY2F0aW9uLm5hbWVcbiAgICAgICAgbG9jYXRpb24uc3R5bGU9XCJmb250LXNpemU6MjBweFwiO1xuICAgICAgICBjb25zdCB3aW5kc3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB3aW5kc3BlZWQuY2xhc3NMaXN0LmFkZCgnd2luZC10ZXh0JylcbiAgICAgICAgd2luZHNwZWVkLmlubmVySFRNTCA9IGA8aW1nIHNyYz0nLi4vYXNzZXRzL3dpbmQuc3ZnJyBzdHlsZT0nd2lkdGg6NDBweCAhaW1wb3J0YW50O2hlaWdodDo2MHB4ICFpbXBvcnRhbnQnPjxkaXY+PHAgY2xhc3M9J21iLTAnPldpbmQgU3BlZWQ8L3A+PHAgY2xhc3M9J21iLTAnIHN0eWxlPSdmb250LXNpemU6MzBweDtmb250LXdlaWdodDo3MDAnPiR7cmVzSlNPTi5jdXJyZW50LndpbmRfa3BofSBLcC9oPC9wPjwvZGl2PmBcbiAgICAgICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZlZWxzTGlrZS5jbGFzc0xpc3QuYWRkKCd3aW5kLXRleHQnKVxuICAgICAgICBmZWVsc0xpa2UuaW5uZXJIVE1MID0gYDxpbWcgc3JjPScuLi9hc3NldHMvdGhlcm1vbWV0ZXItc3VuLnN2Zycgc3R5bGU9J3dpZHRoOjUwcHggIWltcG9ydGFudDtoZWlnaHQ6NjBweCAhaW1wb3J0YW50Oyc+PGRpdj48cCBjbGFzcz0nbWItMCc+RmVlbHMgTGlrZTwvcD48cCBjbGFzcz0nbWItMicgc3R5bGU9J2ZvbnQtc2l6ZTozMHB4O2ZvbnQtd2VpZ2h0OjcwMCc+JHtyZXNKU09OLmN1cnJlbnQuZmVlbHNsaWtlX2N9ICDCsEM8L3A+PC9kaXY+YFxuICAgICAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ2Fuby10ZXh0JylcbiAgICAgICAgaHVtaWRpdHkuaW5uZXJIVE1MID0gYDxpbWcgc3JjPScuLi9hc3NldHMvaHVtaWRpdHkucG5nJyBzdHlsZT0nd2lkdGg6NDBweCAhaW1wb3J0YW50O2hlaWdodDo1MHB4ICFpbXBvcnRhbnQ7Jz48ZGl2PjxwIGNsYXNzPSdtYi0wJz5IdW1pZGl0eTwvcD48cCBjbGFzcz0nbWItMicgc3R5bGU9J2ZvbnQtc2l6ZTozMHB4O2ZvbnQtd2VpZ2h0OjcwMCc+JHtyZXNKU09OLmN1cnJlbnQuaHVtaWRpdHl9ICAlPC9wPjwvZGl2PmBcbiAgICAgICAgY29uc3QgcmFpbkNoYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHJhaW5DaGFuY2UuY2xhc3NMaXN0LmFkZCgnYW5vLXRleHQnKVxuICAgICAgICByYWluQ2hhbmNlLmlubmVySFRNTCA9IGA8aW1nIHNyYz0nLi4vYXNzZXRzL3JhaW4ucG5nJyBzdHlsZT0nd2lkdGg6NDNweCAhaW1wb3J0YW50O2hlaWdodDo0NHB4ICFpbXBvcnRhbnQ7Jz48ZGl2PjxwIGNsYXNzPSdtYi0wJz5DaGFuY2Ugb2YgUmFpbjwvcD48cCBjbGFzcz0nbWItMicgc3R5bGU9J2ZvbnQtc2l6ZTozMHB4O2ZvbnQtd2VpZ2h0OjcwMCc+JHtyZXNKU09OLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbn0gICU8L3A+PC9kaXY+YFxuICAgICAgICB0b3BSaWdodC5hcHBlbmRDaGlsZChmZWVsc0xpa2UpXG4gICAgICAgIHRvcFJpZ2h0LmFwcGVuZENoaWxkKGh1bWlkaXR5KVxuICAgICAgICB0b3BSaWdodC5hcHBlbmRDaGlsZChyYWluQ2hhbmNlKVxuICAgICAgICB0b3BSaWdodC5hcHBlbmRDaGlsZCh3aW5kc3BlZWQpXG4gICAgICAgIHRvcExlZnQuYXBwZW5kQ2hpbGQoY29uZGl0aW9uKVxuICAgICAgICB0b3BMZWZ0LmFwcGVuZENoaWxkKGxvY2F0aW9uKVxuICAgICAgICB0b3BMZWZ0LmFwcGVuZENoaWxkKHRpbWUpXG4gICAgICAgIHRvcExlZnQuYXBwZW5kQ2hpbGQodGVtcClcbiAgICAgICAgdG9wTGVmdC5hcHBlbmRDaGlsZChzZWFyY2hib3gpO1xuXG4gICAgICAgIGNvbnN0IGFjdFdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0V2VhdGhlcicpO1xuICAgICAgICBhY3RXZWF0aGVyLmlubmVySFRNTCA9ICcnXG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IDMgOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgY3VyckRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBjdXJyRGF5LnN0eWxlID0gXCJkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyXCJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCB0ZW1wRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZGF0ZURheS5jbGFzc0xpc3QuYWRkKCdmcy01JylcbiAgICAgICAgICAgIHRlbXBEYXkuY2xhc3NMaXN0LmFkZCgndGV4dC1jZW50ZXInLCAnZnMtMicsICdmdy1ib2xkZXInKVxuICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgICAgIGRhdGVEYXkudGV4dENvbnRlbnQgPSByZXNKU09OLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRhdGVcbiAgICAgICAgICAgIHRlbXBEYXkudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHJlc0pTT04uZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfYykgKyAnIMKwQydcbiAgICAgICAgICAgIGNvbmRpdGlvbkRheS5zcmMgPSAoKCdodHRwczonKStyZXNKU09OLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24uaWNvbik7XG4gICAgICAgICAgICBjdXJyRGF5LmFwcGVuZENoaWxkKGRhdGVEYXkpO1xuICAgICAgICAgICAgY3VyckRheS5hcHBlbmRDaGlsZCh0ZW1wRGF5KTtcbiAgICAgICAgICAgIGN1cnJEYXkuYXBwZW5kQ2hpbGQoY29uZGl0aW9uRGF5KTtcbiAgICAgICAgICAgIGFjdFdlYXRoZXIuYXBwZW5kQ2hpbGQoY3VyckRheSk7XG4gICAgICAgIH0gIFxuICAgIH0pXG59XG5cbmxvYWRMb2NhdGlvbignYXVja2xhbmQnKVxuLy9nZXREYXRhKCdpY2VsYW5kJylcblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShMb2NhdGlvbil7XG4gICAgdHJ5IHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NTM0YWU4NDMyMmNhNDdlNzhiYTE5NDkxMzIzMzAwOCZxPSR7TG9jYXRpb259JmRheXM9M2AsIHttb2RlOiAnY29ycyd9KTtcbiAgICBsZXQgcmVzSlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhyZXNKU09OKVxuICAgIHJldHVybiAocmVzSlNPTik7XG4gICAgLy8gY29uc29sZS5sb2cobmV3IERhdGUoKS5nKVxuICAgIC8vIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpICsgMilcbiAgICB9XG4gICAgY2F0Y2ggKGUpe1xuICAgICAgICBhbGVydCgnbm8gcmVzdWx0IGZvdW5kJylcbiAgICAgICAgcmV0dXJuIChudWxsKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9