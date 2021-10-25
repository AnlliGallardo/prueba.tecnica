

// const apiKey = '88030114c5e47763a011a75e7a10c633'; //RESTO DE DARK SKY
// const apiKeyMapbox = 'pk.eyJ1IjoiYW5sbGk0IiwiYSI6ImNrdjVqd3g5MjE2MXQzMW82NjY5cHlpdDgifQ.E_391GWD6qsPYW72ilG4xA';

export class Weather {

    constructor(city){
        this.token = 'pk.eyJ1IjoiYW5sbGk0IiwiYSI6ImNrdjVqd3g5MjE2MXQzMW82NjY5cHlpdDgifQ.E_391GWD6qsPYW72ilG4xA'; // TOKEN VALIDO DE MAPBOX
        this.city = city;
    }

    async getWeather(){
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.city}.json?access_token=${this.token}`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }

    cambioLocacion(city){
        this.city = city;
    }

    // render() {
    //     return (
    //         <div>
                
    //         </div>
    //     )
    // }
}