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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxpQkFBaUIsY0FBYywrQkFBK0Isb0JBQW9CO0FBQ3hIO0FBQ0E7QUFDQSx3Q0FBd0MsZUFBZSxpQkFBaUIsZ0NBQWdDLGFBQWEsZ0JBQWdCLGlCQUFpQjtBQUN0SjtBQUNBLHlDQUF5QyxnQkFBZ0IsNENBQTRDLHlCQUF5Qiw2QkFBNkIsZ0JBQWdCO0FBQzNLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLGlHQUFpRyxtQkFBbUIsMEJBQTBCO0FBQ3hPO0FBQ0E7QUFDQSxxR0FBcUcsdUJBQXVCLDJFQUEyRSxtQkFBbUIsOEJBQThCO0FBQ3hQO0FBQ0E7QUFDQSw2RkFBNkYsdUJBQXVCLHlFQUF5RSxtQkFBbUIsMkJBQTJCO0FBQzNPO0FBQ0E7QUFDQSwyRkFBMkYsdUJBQXVCLCtFQUErRSxtQkFBbUIsMkRBQTJEO0FBQy9RO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvSEFBb0gsU0FBUyxXQUFXLGFBQWE7QUFDcko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbG9hZExvY2F0aW9uKExvY2F0aW9uKXtcbiAgICBjb25zdCB0b3BMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1sZWZ0Jyk7XG4gICAgY29uc3QgdG9wUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLXJpZ2h0Jyk7XG4gICAgXG5cbiAgICBnZXREYXRhKExvY2F0aW9uKS50aGVuKChyZXNKU09OKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc0pTT04pXG4gICAgICAgIGlmIChyZXNKU09OLmVycm9yICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBhbGVydCgnTm8gUmVzdWx0IEZvdW5kJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0b3BMZWZ0LmlubmVySFRNTCA9ICcnXG4gICAgICAgIHRvcFJpZ2h0LmlubmVySFRNTCA9ICcnXG4gICAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzZWFyY2hib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2VhcmNoYm94LnN0eWxlPVwiaGVpZ2h0OiAzMHB4O21heC13aWR0aDogMjAwcHg7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6IGNlbnRlcjtib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgY29uc3QgaW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXRUZXh0LnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggTG9jYXRpb24uLi5cIlxuICAgICAgICBpbnB1dFRleHQuc3R5bGUgPSBcImhlaWdodDogMTAwJTtmbGV4LXNocmluazogMjttYXgtd2lkdGg6IDE1MHB4O2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7Ym9yZGVyOiBub25lO2ZvbnQtc2l6ZTogMTVweDtmb250LXdlaWdodDogNjAwO1wiXG4gICAgICAgIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBzZWFyY2hJY29uLnN0eWxlID0gXCJoZWlnaHQ6IDE4cHg7bWluLXdpZHRoOiAxOHB4O2JhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvc2VhcmNoLnN2Zyk7YmFja2dyb3VuZC1zaXplOiBjb250YWluO2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7Y3Vyc29yOiBwb2ludGVyO1wiXG4gICAgICAgIHNlYXJjaEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5wdXRUZXh0LnZhbHVlID09PSAnJyl7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSB0eXBlIGEgbG9jYXRpb24nKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvYWRMb2NhdGlvbihpbnB1dFRleHQudmFsdWUpXG4gICAgICAgIH0pXG4gICAgICAgIHNlYXJjaGJveC5hcHBlbmRDaGlsZChpbnB1dFRleHQpOyBzZWFyY2hib3guYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSByZXNKU09OLmN1cnJlbnQudGVtcF9jICsgJyDCsEMnO1xuICAgICAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKVxuICAgICAgICB0aW1lLnRleHRDb250ZW50ID0gcmVzSlNPTi5sb2NhdGlvbi5sb2NhbHRpbWU7XG4gICAgICAgIHRpbWUuc3R5bGUgPSBcImZvbnQtc2l6ZToxNXB4XCI7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbmRpdGlvbicpO1xuICAgICAgICBjb25kaXRpb24udGV4dENvbnRlbnQgPSByZXNKU09OLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IHJlc0pTT04ubG9jYXRpb24uY291bnRyeSArICcsICcrcmVzSlNPTi5sb2NhdGlvbi5uYW1lXG4gICAgICAgIGxvY2F0aW9uLnN0eWxlPVwiZm9udC1zaXplOjE1cHhcIjtcbiAgICAgICAgY29uc3Qgd2luZHNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgd2luZHNwZWVkLmNsYXNzTGlzdC5hZGQoJ3dpbmQtdGV4dCcsJ2p1c3RpZnktY29udGVudC1zdGFydCcsICdwZS0zJylcbiAgICAgICAgd2luZHNwZWVkLmlubmVySFRNTCA9IGA8aW1nIHNyYz0nLi4vYXNzZXRzL3dpbmQuc3ZnJyBzdHlsZT0nd2lkdGg6NDBweCAhaW1wb3J0YW50O2hlaWdodDo2MHB4ICFpbXBvcnRhbnQnPjxkaXY+PHAgY2xhc3M9J21iLTAnPldpbmQgU3BlZWQ8L3A+PHAgY2xhc3M9J21iLTAnIHN0eWxlPSdmb250LXNpemU6MzBweDtmb250LXdlaWdodDo1MDAnPiR7cmVzSlNPTi5jdXJyZW50LndpbmRfa3BofSBLcC9oPC9wPjwvZGl2PmBcbiAgICAgICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZlZWxzTGlrZS5jbGFzc0xpc3QuYWRkKCd3aW5kLXRleHQnLCdqdXN0aWZ5LWNvbnRlbnQtc3RhcnQnLCAncGUtMycpXG4gICAgICAgIGZlZWxzTGlrZS5pbm5lckhUTUwgPSBgPGltZyBzcmM9Jy4uL2Fzc2V0cy90aGVybW9tZXRlci1zdW4uc3ZnJyBzdHlsZT0nd2lkdGg6NTBweCAhaW1wb3J0YW50O2hlaWdodDo2MHB4ICFpbXBvcnRhbnQ7Jz48ZGl2PjxwIGNsYXNzPSdtYi0wJz5GZWVscyBMaWtlPC9wPjxwIGNsYXNzPSdtYi0yJyBzdHlsZT0nZm9udC1zaXplOjMwcHg7Zm9udC13ZWlnaHQ6NTAwJz4ke3Jlc0pTT04uY3VycmVudC5mZWVsc2xpa2VfY30gIMKwQzwvcD48L2Rpdj5gXG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgnYW5vLXRleHQnLCdqdXN0aWZ5LWNvbnRlbnQtc3RhcnQnLCAncGUtMycpXG4gICAgICAgIGh1bWlkaXR5LmlubmVySFRNTCA9IGA8aW1nIHNyYz0nLi4vYXNzZXRzL2h1bWlkaXR5LnBuZycgc3R5bGU9J3dpZHRoOjQwcHggIWltcG9ydGFudDtoZWlnaHQ6NTBweCAhaW1wb3J0YW50Oyc+PGRpdj48cCBjbGFzcz0nbWItMCc+SHVtaWRpdHk8L3A+PHAgY2xhc3M9J21iLTInIHN0eWxlPSdmb250LXNpemU6MzBweDtmb250LXdlaWdodDo1MDAnPiR7cmVzSlNPTi5jdXJyZW50Lmh1bWlkaXR5fSAgJTwvcD48L2Rpdj5gXG4gICAgICAgIGNvbnN0IHJhaW5DaGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICByYWluQ2hhbmNlLmNsYXNzTGlzdC5hZGQoJ2Fuby10ZXh0JywnanVzdGlmeS1jb250ZW50LXN0YXJ0JywgJ3BlLTMnKVxuICAgICAgICByYWluQ2hhbmNlLmlubmVySFRNTCA9IGA8aW1nIHNyYz0nLi4vYXNzZXRzL3JhaW4ucG5nJyBzdHlsZT0nd2lkdGg6NDNweCAhaW1wb3J0YW50O2hlaWdodDo0NHB4ICFpbXBvcnRhbnQ7Jz48ZGl2PjxwIGNsYXNzPSdtYi0wJz5DaGFuY2Ugb2YgUmFpbjwvcD48cCBjbGFzcz0nbWItMicgc3R5bGU9J2ZvbnQtc2l6ZTozMHB4O2ZvbnQtd2VpZ2h0OjUwMCc+JHtyZXNKU09OLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbn0gICU8L3A+PC9kaXY+YFxuICAgICAgICB0b3BSaWdodC5hcHBlbmRDaGlsZChmZWVsc0xpa2UpXG4gICAgICAgIHRvcFJpZ2h0LmFwcGVuZENoaWxkKGh1bWlkaXR5KVxuICAgICAgICB0b3BSaWdodC5hcHBlbmRDaGlsZChyYWluQ2hhbmNlKVxuICAgICAgICB0b3BSaWdodC5hcHBlbmRDaGlsZCh3aW5kc3BlZWQpXG4gICAgICAgIHRvcExlZnQuYXBwZW5kQ2hpbGQoY29uZGl0aW9uKVxuICAgICAgICB0b3BMZWZ0LmFwcGVuZENoaWxkKGxvY2F0aW9uKVxuICAgICAgICB0b3BMZWZ0LmFwcGVuZENoaWxkKHRpbWUpXG4gICAgICAgIHRvcExlZnQuYXBwZW5kQ2hpbGQodGVtcClcbiAgICAgICAgdG9wTGVmdC5hcHBlbmRDaGlsZChzZWFyY2hib3gpO1xuICAgIH0pXG59XG5cbmxvYWRMb2NhdGlvbignYXVja2xhbmQnKVxuLy9nZXREYXRhKCdpY2VsYW5kJylcblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShMb2NhdGlvbil7XG4gICAgdHJ5IHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NTM0YWU4NDMyMmNhNDdlNzhiYTE5NDkxMzIzMzAwOCZxPSR7TG9jYXRpb259JmRheXM9M2AsIHttb2RlOiAnY29ycyd9KTtcbiAgICBsZXQgcmVzSlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhyZXNKU09OKVxuICAgIHJldHVybiAocmVzSlNPTik7XG4gICAgLy8gY29uc29sZS5sb2cobmV3IERhdGUoKS5nKVxuICAgIC8vIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpICsgMilcbiAgICB9XG4gICAgY2F0Y2ggKGUpe1xuICAgICAgICBhbGVydCgnbm8gcmVzdWx0IGZvdW5kJylcbiAgICAgICAgcmV0dXJuIChudWxsKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9