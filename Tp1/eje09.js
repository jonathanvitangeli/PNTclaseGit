function obtenerTareas() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos?userId=3')
            .then(response => response.json())
            .then(tareas => {
                console.log('Lista de tareas pendientes: ', tareas);
                resolve(tareas);
            })
            .catch(error => {
                console.error('Error al obtener las tareas:', error);
                reject(error);
            });
    });
}

obtenerTareas()