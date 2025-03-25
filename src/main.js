import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importar Bootstrap y sus estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Importar estilos globales
import './assets/global.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
