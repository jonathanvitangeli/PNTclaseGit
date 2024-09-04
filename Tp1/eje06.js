async function obtenerComentarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=2');
        const comentarios = await response.json();
        console.log('Comentarios del post con ID 2:', comentarios);
    } catch (error) {
        console.error('Error al obtener los comentarios:', error);
    }
}

obtenerComentarios();