async function obtenerComentarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=2');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const comentarios = await response.json();
        
        console.log('Comentarios del post con ID 2:', comentarios);
    } catch (error) {
        console.error('Error al obtener los comentarios:', error);
    }
}

obtenerComentarios();
