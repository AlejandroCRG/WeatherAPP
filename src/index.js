import './style.css';

let weatherdiv = document.getElementById('temp');
let locationdiv = document.getElementById('name');
let descriptiondiv = document.getElementById('description');
let image = document.getElementById('image');
let wind = document.getElementById('wind');
let humidity = document.getElementById('humidity')

function getimg(x){
    if (x === '01d'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/869/869767.png';
    }
    if (x === '01n'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/581/581550.png';
    }
    if (x === '02d'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/3222/3222807.png';
    }
    if (x === '02n'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/4676/4676959.png';
    }
    if (x === '03d'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/414/414825.png';
    }
    if (x === '03n'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/2136/2136594.png';
    }
    if (x === '04d'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/9672/9672161.png';
    }
    if (x === '04n'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/9672/9672161.png';
    }
    if (x === '09d'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/1208/1208526.png';
    }
    if (x === '09n'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/1208/1208526.png';
    }
    if (x === '10d'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/3104/3104619.png';
    }
    if (x === '10n'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/9755/9755258.png';
    }
    if (x === '11d'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/1146/1146860.png';
    }
    if (x === '11n'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/1959/1959360.png';
    }
    if (x === '13d'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/2315/2315377.png';
    }
    if (x === '13n'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/2315/2315377.png';
    }
    if (x === '50d'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/4151/4151022.png';
    }
    if (x === '50n'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/1207/1207561.png';
    }
}

async function getWeather(){
    const location = document.getElementById('location').value;
    const Locationresponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=0f22ba557dc196175d48a0811ec6d7ac`, {mode: 'cors'});
    const searchlocation = await Locationresponse.json();
    let lat = searchlocation[0].lat;
    let lon = searchlocation[0].lon;
    let locationname = searchlocation[0].name.toUpperCase();

    const Weatherresponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0f22ba557dc196175d48a0811ec6d7ac`, {mode: 'cors'});
    const searchData = await Weatherresponse.json();

    console.log(searchData)

    let averagetemp = Math.floor(searchData.main.temp -273);
    let imgID = searchData.weather[0].icon;
    let windspeed = searchData.wind.speed;
    let humidityvalue = searchData.main.humidity;

    let weatherdes = searchData.weather[0].description;
    weatherdes = weatherdes.slice(0,1).toUpperCase() + weatherdes.slice(1);
    console.log(weatherdes);

    getimg(imgID)
    weatherdiv.innerText = averagetemp += '°C';
    locationdiv.innerText = locationname;
    descriptiondiv.innerText = weatherdes;
    wind.innerHTML = `${windspeed}m/s`;
    humidity.innerHTML = `${humidityvalue}%`;
}

getWeather()


let searchbutton = document.getElementById('searchbutton')
searchbutton.addEventListener("click", getWeather)