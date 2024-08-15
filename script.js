let val = "https://api.openweathermap.org/data/2.5/weather";
let input = document.getElementById('input');
let appId = "f00c38e0279b7bc85480c3fe775d518c";
let button = document.getElementById('button');
let temp = document.getElementById('temp');
let city = document.getElementById('city');
let date = document.getElementById('date');
let speed = document.getElementById('speed');
let time = document.getElementById('time');
const des = document.getElementById('describe')

async function Weather() {
    let cityName = input.value;
    let url = `${val}?q=${cityName}&appid=${appId}&units=metric`;

    try {
        let response = await fetch(url);
        let json = await response.json();
        if (response.ok) {
            city.innerHTML = `City name: ${json.name}`;
            temp.innerHTML = `Temperature of city: ${json.main.temp}°C`;
            date.innerHTML = `Today's weather: ${new Date().toLocaleDateString()}`;
            speed.innerHTML = `Speed: ${json.wind.speed} m/s`;
            des.innerHTML=`Weather type: ${json.weather[0].description}`
            setInterval(() => {
                
                time.innerHTML = `Time: ${new Date().toLocaleTimeString()}`;
            }, 1000);
        } else {
            alert('Enter your city');
        }
    } catch (err) {
        console.error(err, "City not found");
    }
}

button.addEventListener('click', Weather);
