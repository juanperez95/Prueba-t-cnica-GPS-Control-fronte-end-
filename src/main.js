import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia(); // Manejar gestor de estado



createApp(App)
.use(pinia) // Utilizar el gestor de estado en toda la aplicacion
.mount('#app')
