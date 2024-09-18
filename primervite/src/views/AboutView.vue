<template>
    <div>
      <About />
    </div>
  </template>
  
  <script>
  import About from '../components/About.vue'; // Asegúrate de importar el componente
  
  export default {
    name: 'AboutView',
    components: {
      About,
    },
  };
  </script>
  
  <style scoped>
  /* Aquí puedes agregar estilos específicos para la vista About si es necesario */
  </style>
  