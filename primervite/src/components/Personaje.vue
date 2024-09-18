<template>
  <div class="container mt-4">
    <h1>Personajes de Rick and Morty</h1>
    <div class="form-group mb-4">
      <label for="numCharacters">Número de personajes:</label>
      <select v-model="selectedCount" @change="fetchCharacters" class="form-control" id="numCharacters">
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>
    <div v-if="loading" class="text-center">
      <p>Cargando...</p>
    </div>
    <div v-else>
      <div v-if="characters.length === 0" class="text-center">
        <p>No se encontraron personajes.</p>
      </div>
      <div class="row">
        <div class="col-md-4 mb-3" v-for="character in characters" :key="character.id">
          <div class="card">
            <img :src="character.image" class="card-img-top" :alt="character.name" />
            <div class="card-body">
              <h5 class="card-title">{{ character.name }}</h5>
              <p class="card-text">
                <strong>Especie:</strong> {{ character.species }}<br />
                <strong>Género:</strong> {{ character.gender }}<br />
                <strong>Estado:</strong> {{ character.status }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Personaje',
  data() {
    return {
      characters: [],
      loading: true,
      selectedCount: 10, // Valor por defecto
      options: [10, 20, 30, 40, 50] // Opciones para el número de personajes
    };
  },
  async created() {
    await this.fetchCharacters();
  },
  methods: {
    async fetchCharacters() {
      this.loading = true;
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?limit=${this.selectedCount}`);
        this.characters = response.data.results;
      } catch (error) {
        console.error('Error al cargar los personajes:', error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  text-align: center;
}

</style>
