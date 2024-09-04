async function eliminarFoto() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/1', {
            method: 'DELETE'
        });
        console.log('Foto con ID 1 eliminada con éxito.');
    } catch (error) {
        console.error('Error al eliminar la foto:', error);
    }
}

eliminarFoto();