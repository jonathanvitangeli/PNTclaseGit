import {
    createApp
} from 'vue';
import App from './App.vue';
import router from './router'; // Importa el enrutador
import './style.css';

// Importar Bootstrap CSS y JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Importa Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// Crea la aplicación Vue y usa el enrutador
createApp(App)
    .use(router) // Añade el enrutador
    .mount('#app')