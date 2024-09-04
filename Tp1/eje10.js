// Función para obtener y mostrar artículos
function obtenerArticulos() {
    // Retorna una nueva promesa
    return new Promise((resolve, reject) => {
        // Hacemos la solicitud GET usando fetch
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // Verificamos si la respuesta fue exitosa
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                // Convertimos la respuesta a JSON
                return response.json();
            })
            .then(articulos => {
                // Mostramos los artículos en la consola
                console.log('Lista de artículos:');
                articulos.forEach(articulo => {
                    console.log(`ID: ${articulo.id}`);
                    console.log(`Título: ${articulo.title}`);
                    console.log(`Cuerpo: ${articulo.body}`);
                    console.log('---');
                });

                // Resolvemos la promesa con los datos
                resolve(articulos);
            })
            .catch(error => {
                // Rechazamos la promesa en caso de error
                console.error('Error al obtener los artículos:', error);
                reject(error);
            });
    });
}

// Llamamos a la función y manejamos la promesa
obtenerArticulos()
   
