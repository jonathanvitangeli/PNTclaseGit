async function obtenerAlbumes() {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums?userId=1');
console.log('albumes del usuario: ',response.data)
    }catch(error){
        console.error('Error:', error.message);
    }
    
}

obtenerAlbumes();