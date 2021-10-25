
import '../styles/styles.css'
import { Weather } from './SeccionApi'
import { Descrip } from './Descrip'
import { Storage } from './Storage'
import { AppList } from './AppList'
import { logout, startLogout } from '../actions/actionLogin'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'



export const App = () => {
    
    const storage = new Storage();
    const { city } = storage.getLocacionData();
    const weather = new Weather(city);

    const dispatch = useDispatch()
   
    

    async function fetchWeather(){
        const data = await weather.getWeather();
        console.log(data);
        // descrip.render(weather);
    }

    document.getElementById('weather_btnForm').addEventListener('click', (e) =>{
        e.preventDefault(); 
        const city = document.getElementById('weather_city').value[0].toUpperCase() + document.getElementById('weather_city').value.slice(1);
        console.log(city)
        weather.cambioLocacion(city);
        storage.setLocacionData(city);
        fetchWeather();
    }) 
    document.addEventListener('DOMContentLoaded', fetchWeather());

        
        return (            
            <>
            <AppList />
                        
                            <Link 
                            to="/"
                            className="navbar-brand btn btn-danger logout" 
                            onClick={() =>dispatch(startLogout())}>
                            Logout
                            </Link>
            </>
        )
}