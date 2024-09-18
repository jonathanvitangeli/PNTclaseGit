<template>
    <div class="about-container">
        <h1>Sobre Nosotros</h1>
        <p>
            Esta es una aplicación construida utilizando Vue.js y Bootstrap.
            Aquí podrás encontrar información sobre la aplicación, los personajes de Rick and Morty y mucho más.
        </p>
    </div>
</template>
  
  <script>
export default {
    name: 'About',
};
</script>
  
  <style scoped>
.about-container {
    text-align: center;
    padding: 2em;
    height: 100vh;
}

h1 {
    color: #42b983;
}

p {
    font-size: 1.2em;
    color: #333;
}
</style>