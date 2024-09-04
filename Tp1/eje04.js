async function obtenerUsuario() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
        const data = await response.json();
        console.log('usuario con ID 5 ', data);
    } catch (error) {
        console.error('Error en la solicitud', error);
    }
}

obtenerUsuario();