import React from 'react'





export const AppList = () => {

    
    

    return (
        <div className="fondo">
            
        <div className="container p-4">
        <div className="row">
            <div className="col-sm-12 col-md-4 mx-auto text-center">
                <div className="card">
                    <div className="card-body">
                        <h1 id="weather_location" className="h3">Locación</h1>
                        <h3 id="weather_description" className="h4">Descripción</h3>
                        <h3 id="weather_string">Grado</h3>
                        <ul className="list-group mt-3">
                            <li id="weather_humidity" className="list-group-item">Humedad</li>
                            <li id="weather_wind" className="list-group-item">Viento</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="card">
                    <div className="card-body">
                        <form id="weather_form">
                            <div className="form-group">
                                <input type="text" id="weather_city" className="form-control" placeholder="Ciudad" />
                            </div>
                            <br />
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" id="weather_btnForm">Obtener Clima</button>
                            </div><br />
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}


