/* eslint-disable quotes */

import {mainBox, futureBox, Default} from './boxMaker';

async function take(loc){
    try{
        let forecast = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2c32b564e2fa4b9f94061817242401&q=${loc}&days=4`);
        return forecast
    }catch{
        return 'error'
    }
}
    

async function a(data){
    let k = await data;
    let j = await k.json();
    let hasError = 'error' in j
        if (hasError){
            locDiv.textContent = 'location not found';
            Default();
            return;
        }
    console.log(j);
    locDiv.textContent = `${j.location.name} / ${j.location.region}`;
    let icon = [j.current.condition.icon , j.forecast.forecastday[1].day.condition.icon , j.forecast.forecastday[2].day.condition.icon ]
    let text = [j.current.condition.text, j.forecast.forecastday[1].day.condition.text, j.forecast.forecastday[2].day.condition.text]
    console.log(icon)
    let sun = [j.forecast.forecastday[0].astro.sunrise, j.forecast.forecastday[0].astro.sunset]
    console.log(sun);
    let temp = [j.current.temp_c, [j.forecast.forecastday[1].day.mintemp_c, j.forecast.forecastday[1].day.maxtemp_c], [j.forecast.forecastday[2].day.mintemp_c, j.forecast.forecastday[2].day.maxtemp_c]];
    console.log(temp);
    let wind = [j.current.wind_kph, j.forecast.forecastday[1].day.maxwind_kph, j.forecast.forecastday[2].day.maxwind_kph];
    console.log(wind);
    let date = [j.forecast.forecastday[1].date, j.forecast.forecastday[2].date];

    return {icon, text, sun, temp, wind, date};
}

let search = document.querySelector('#search');
let btn = document.querySelector('#searchbtn');
let locDiv = document.querySelector('.loc');


let data;



btn.addEventListener('click', ()=>{
    console.log('hello')
    if (search.value == ''){
        return;
    }
    let api = take(search.value)
    data = a(api);

    mainBox(data);
    futureBox(data);
    console.log(data);
})

