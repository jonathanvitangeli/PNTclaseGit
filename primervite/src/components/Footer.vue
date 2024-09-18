<template>
  
    <footer class="bg-light text-center text-lg-start">
        <div class="text-center p-3">
            © 2024 My App:
            <a class="text-dark" href="/">myapp.com</a>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
footer {
  background-color: #f8f9fa; /* Color de fondo del footer */
  padding: 1rem 0; /* Espaciado arriba y abajo del footer */
  width: 100%; /* Asegura que el footer ocupe todo el ancho */
}

main{
    height: 100vh;
    text-align: center;
    padding: 2em;
}

  
  h1 {
    color: #42b983;
  }
  
  p {
    font-size: 1.2em;
    color: #333;
  }
</style>