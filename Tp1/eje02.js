axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log('Post eliminado:', response.data);
    })
    .catch(error => {
        console.error('Error al eliminar el post:', error);
    });