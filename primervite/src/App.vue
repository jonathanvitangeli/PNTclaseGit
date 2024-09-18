<script setup>
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

</script>

<template>
  <div>
    <!-- Menú de navegación -->
    <Menu />

    <!-- Espacio para cargar las vistas según las rutas -->
    <router-view />

    <!-- Footer al final de la página -->
    <Footer />
  </div>
</template>


<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

footer {
  margin-top: auto; 
}
</style>
