const userLocation = document.querySelector('#userLocation') as HTMLInputElement;
const searchBtn = document.getElementById('submitLocation') as HTMLButtonElement;
const dates = document.getElementsByTagName('span') as HTMLCollectionOf<HTMLElement>;
const cityName = document.querySelector('h5') as HTMLElement;

searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('salom', userLocation.value)
    if (userLocation.value === '') {
        // const locationApi = new Promise();
        fetch('https://api.openweathermap.org/data/2.5/weather?q=tashkent&appid=abad344b6b4aba506fc207f3f39d0e92', { mode: 'cors' })
            .then(response => response.json())
            .then(function(response) {
                console.log(response)
                cityName.innerHTML = response.name;
                dates[0].innerHTML = `${Math.round(1 * (response.main.temp - 273))}&#176;`;
                dates[1].innerHTML = `${response.main.humidity}%`;
                dates[2].innerHTML = `${response.wind.speed} m/s`;
                dates[3].innerHTML = `${response.clouds.all}%`;
                (document.getElementsByClassName('dates')[0]as HTMLDivElement).style .display = 'block';
            })
            .catch(err => {
                console.log(err);
                alert('something went wrong');
                (document.getElementsByClassName('dates')[0] as HTMLDivElement).style.display = 'none';
            });
    } else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation.value}&appid=abad344b6b4aba506fc207f3f39d0e92`, { mode: 'cors' })
            .then(responseOthers => responseOthers.json())
            .then(function(response) {
                console.log(response)
                cityName.innerHTML = response.name;
                dates[0].innerHTML = `${Math.round(1 * (response.main.temp - 273))}&#176;`;
                dates[1].innerHTML = `${response.main.humidity}%`;
                dates[2].innerHTML = `${response.wind.speed} m/s`;
                dates[3].innerHTML = `${response.clouds.all}%`;
                (document.getElementsByClassName('dates')[0] as HTMLDivElement).style.display = 'block';
            })
            .catch(err => {
                console.log(err);
                alert('City not found');
                (document.getElementsByClassName('dates')[0] as HTMLDivElement).style.display = 'none';
            });

        userLocation.value = '';
    }
})

fetch('https://api.openweathermap.org/data/2.5/weather?q=tashkent&appid=abad344b6b4aba506fc207f3f39d0e92', { mode: 'cors' })
    .then(response => response.json())
    .then(function(response) {
        console.log(response)
        cityName.innerHTML = response.name;
        dates[0].innerHTML = `${Math.round(1 * (response.main.temp - 273))}&#176;`;
        dates[1].innerHTML = `${response.main.humidity}%`;
        dates[2].innerHTML = `${response.wind.speed} m/s`;
        dates[3].innerHTML = `${response.clouds.all}%`;
        (document.getElementsByClassName('dates')[0] as HTMLDivElement).style.display = 'block';
    })
    .catch(err => {
        console.log(err);
        alert('something went wrong');
    });