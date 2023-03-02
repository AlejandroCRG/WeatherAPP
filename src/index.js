import './style.css';


async function getWeather(){
    const location = document.getElementById('location').value;
    const Locationresponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=0f22ba557dc196175d48a0811ec6d7ac`, {mode: 'cors'});
    const searchlocation = await Locationresponse.json();
    let lat = searchlocation[0].lat
    let lon = searchlocation[0].lon

    const Weatherresponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0f22ba557dc196175d48a0811ec6d7ac`, {mode: 'cors'});
    const searchData = await Weatherresponse.json();

    let averagetemp = Math.floor(searchData.main.temp -273)
    let feeltemp = Math.floor(searchData.main.feels_like -273)

    let WeatherData = DataObject(averagetemp,feeltemp)

    return WeatherData
}

// Look how to return your object with the data retrieved from the API

function DataObject(averagetemp,feeltemp){
    let obj = { 
        averagetemp: averagetemp,
        feeltemp: feeltemp
    }
    return obj
}

let ans = getWeather()

console.log(WeatherData)
