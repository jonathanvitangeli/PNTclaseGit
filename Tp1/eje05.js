async function eliminarTodo() {
    try {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/todos/1');
        console.log('To-Do eliminado:', response.data);
    } catch (error) {
        console.error('Error al eliminar el To-Do:', error);
    }
}

eliminarTodo();