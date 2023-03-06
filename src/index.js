import './style.css';

let weatherdiv = document.getElementById('temp');
let locationdiv = document.getElementById('name');
let descriptiondiv = document.getElementById('description');
let image = document.getElementById('image');
let wind = document.getElementById('wind');
let humidity = document.getElementById('humidity');
let visibility = document.getElementById('visibility');

async function getWeather(){
    const location = document.getElementById('location').value;
    const Locationresponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=0f22ba557dc196175d48a0811ec6d7ac`, {mode: 'cors'});
    const searchlocation = await Locationresponse.json();
    let lat = searchlocation[0].lat;
    let lon = searchlocation[0].lon;
    let locationname = searchlocation[0].name;

    const Weatherresponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0f22ba557dc196175d48a0811ec6d7ac`, {mode: 'cors'});
    const searchData = await Weatherresponse.json();

    console.log(searchData)

    let averagetemp = Math.floor(searchData.main.temp -273);
    let imgID = searchData.weather[0].icon;
    let windspeed = searchData.wind.speed;
    let humidityvalue = searchData.main.humidity;
    let visibilityvalue = searchData.visibility/1000;

    let weatherdes = searchData.weather[0].description;
    weatherdes = weatherdes.slice(0,1).toUpperCase() + weatherdes.slice(1);

    getimg(imgID)
    weatherdiv.innerText = averagetemp += '°';
    locationdiv.innerText = locationname;
    descriptiondiv.innerText = weatherdes;
    wind.innerHTML = `${windspeed}m/s`;
    humidity.innerHTML = `${humidityvalue}%`;
    visibility.innerHTML = `${visibilityvalue}km`;
}

function getimg(x){
    if (x === '01d'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/6974/6974833.png';
    }
    if (x === '01n'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/4333/4333652.png';
    }
    if (x === '02d'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/1146/1146869.png';
    }
    if (x === '02n'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/3626/3626276.png';
    }
    if (x === '03d'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/414/414927.png';
    }
    if (x === '03n'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/414/414927.png';
    }
    if (x === '04d'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/414/414927.png';
    }
    if (x === '04n'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/414/414927.png';
    }
    if (x === '09d'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/1208/1208526.png';
    }
    if (x === '09n'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/1208/1208526.png';
    }
    if (x === '10d'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/1959/1959317.png';
    }
    if (x === '10n'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/5903/5903792.png';
    }
    if (x === '11d'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/1146/1146860.png';
    }
    if (x === '11n'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/1959/1959348.png';
    }
    if (x === '13d'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/2315/2315309.png';
    }
    if (x === '13n'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/2315/2315309.png';
    }
    if (x === '50d'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/4005/4005817.png';
    }
    if (x === '50n'){
        image.src = 'https://cdn-icons-png.flaticon.com/512/2930/2930127.png';
    }
}

getWeather()


let datadiv = document.getElementById('datadiv')
let searchbutton = document.getElementById('searchbutton')
searchbutton.addEventListener("click", getWeather)