<template>
    <div>
        <h1>Personajes de Rick and Morty</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-4" v-for="personaje in personajes" :key="personaje.id">
                    <div class="card">
                        <img :src="personaje.image" class="card-img-top" :alt="personaje.name" />
                        <div class="card-body">
                            <h5 class="card-title">{{ personaje.name }}</h5>
                            <p class="card-text">Status: {{ personaje.status }}</p>
                            <p class="card-text">Species: {{ personaje.species }}</p>
                            <p class="card-text">Gender: {{ personaje.gender }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Variable reactiva para almacenar los personajes
const personajes = ref([]);

// Función para obtener los personajes de la API
const obtenerPersonajes = async () => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        personajes.value = response.data.results;
    } catch (error) {
        console.error('Error al obtener los personajes:', error);
    }
};

// Llamar la función cuando el componente se monte
onMounted(() => {
    obtenerPersonajes();
});
</script>

<style scoped>
.h1{
    text-align: center;
}
.card {
    width: 100%;
    max-width: 300px;
}

.card-img-top {
    height: 200px;
    object-fit: cover;
}

.container {
    margin-top: 20px;
}
</style>