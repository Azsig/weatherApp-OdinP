let mainBox = async (data) =>{
    let main = document.querySelector('.main');

    let img = main.querySelector('.cond>img');
    let text = main.querySelector('.cond>div');
    let  wind = main.querySelector('#wind>div');
    let temp = main.querySelector('#temp>div');
    let sunrise = main.querySelector('#sunrise>div');
    let sunset = main.querySelector('#sunset>div');

    let Data = await data;
    console.log(Data);

    img.src = Data.icon[0];
    text.textContent = Data.text[0];
    wind.textContent = `${Data.wind[0]}Km/h`;
    temp.textContent = `${Data.temp[0]}°C`;
    sunrise.textContent = Data.sun[0];
    sunset.textContent = Data.sun[1];
}

let futureBox = async (data) => {
    let Data = await data
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    for (let i = 1; i < 3; i++){
        let box = document.querySelector(`#box${i}`);
        let img = box.querySelector('#cond>img');
        let wind = box.querySelector('.wind>div');
        let temp = box.querySelector('.temp>div');
        let day = box.querySelector('#day');
        let date = box.querySelector('#date');

        let d = new Date(Data.date[i-1]);
        let dayText = days[d.getDay()];

        let tempText = Data.temp[i];

        img.src = Data.icon[i];
        wind.textContent = `${Data.wind[i]}Km/h`;
        temp.textContent = `${tempText[0]}°C - ${tempText[1]}°C`
        day.textContent = dayText;
        date.textContent = Data.date[i-1];
    }
}

let Default = () =>{
    let main = document.querySelector('.main');

    let img = main.querySelector('.cond>img');
    let text = main.querySelector('.cond>div');
    let  wind = main.querySelector('#wind>div');
    let temp = main.querySelector('#temp>div');
    let sunrise = main.querySelector('#sunrise>div');
    let sunset = main.querySelector('#sunset>div');

    img.src = 'img/weather-cloudy.svg';
    text.textContent = 'Cloudy';
    wind.textContent = '----Km/h';
    temp.textContent = '----°C';
    sunrise.textContent = '--:--';
    sunset.textContent = '--:--';

    for (let i = 1; i < 3; i++){
        let box = document.querySelector(`#box${i}`);
        let img = box.querySelector('#cond>img');
        let wind = box.querySelector('.wind>div');
        let temp = box.querySelector('.temp>div');
        let day = box.querySelector('#day');
        let date = box.querySelector('#date');


        img.src ='img/weather-cloudy.svg';
        wind.textContent = '----Km/h';
        temp.textContent = `---°C - ---°C`
        day.textContent = 'Weekday';
        date.textContent = '-- - -- - ----';
    }
}

export {mainBox, futureBox, Default};