import './style.css';

let weatherdiv = document.getElementById('temp');
let locationdiv = document.getElementById('name');
let descriptiondiv = document.getElementById('description');
let image = document.getElementById('image');

async function getWeather(){
    const location = document.getElementById('location').value;
    const Locationresponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=0f22ba557dc196175d48a0811ec6d7ac`, {mode: 'cors'});
    const searchlocation = await Locationresponse.json();
    let lat = searchlocation[0].lat;
    let lon = searchlocation[0].lon;
    let locationname = searchlocation[0].name;

    const Weatherresponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0f22ba557dc196175d48a0811ec6d7ac`, {mode: 'cors'});
    const searchData = await Weatherresponse.json();


    let averagetemp = Math.floor(searchData.main.temp -273);
    let weatherdes = searchData.weather[0].main;
    let imgID = searchData.weather[0].icon;

    image.src = `https://openweathermap.org/img/wn/${imgID}@2x.png`;
    weatherdiv.innerText = averagetemp += '°C';
    locationdiv.innerText = locationname;
    descriptiondiv.innerText = weatherdes;
}

getWeather()

function animateSearch(){
    let search = document.getElementById('location');
}


let searchbutton = document.getElementById('searchbutton')
searchbutton.addEventListener("click", getWeather)
searchbutton.addEventListener("click", animateSearch)
