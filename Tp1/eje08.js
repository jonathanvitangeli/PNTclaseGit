const API_KEY = 'c686398afb14c7bdf39209ff0f15a615';
const LAT = '51.5074';
const LON = '-0.1278';

function obtenerDatosDelClima() {
    return new Promise((resolve, reject) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())

            .then(data => {
                console.log('Datos del clima:');
                resolve(data);
            })
            .catch(error => {
                console.error('Error al obtener los datos del clima:', error);
                reject(error);
            });
    });
}

obtenerDatosDelClima()