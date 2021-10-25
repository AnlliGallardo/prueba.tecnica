

export class Descrip {

    constructor(){
        this.location = document.getElementById('weather_location');
        this.desc = document.getElementById('weather_description');
        this.grades = document.getElementById('weather_string');
        this.humidity = document.getElementById('weather_humidity');
        this.wind = document.getElementById('weather_wind');

        
    }

    render(weather) {
        this.location.textContent = weather.name + ' / ' + weather.country;
        this.desc.textContent = weather.weather[0]['description'];
        this.grades.textContent = weather.main.temp + ' °C';
        this.humidity.textContent = 'Humedad: ' + weather.main.humidity + ' %';
        this.wind.textContent = 'Viento: ' + weather.wind.speed + ' m/s';     
    }
    // console.log(description)
}

