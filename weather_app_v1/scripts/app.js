const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')
const forecast = new Forecast();
// console.log(forecast);

const updateUI = (data) => {
    console.log(data);

    // destructure properties
    const { cityDets, weather} = data;

    // update details template 
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;

    // update icons and night and day images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    
    time.setAttribute('src', timeSrc);
    icon.setAttribute('src', iconSrc);

    //  remove the d-none class if present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};

cityForm.addEventListener('submit', e => {
    // prevent default action of reloading the page 
    e.preventDefault();

    // get city value
    const city=cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new city
    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    // set localStorage 
    localStorage.setItem('city', city);
});


if (localStorage.getItem('city')) {
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
}