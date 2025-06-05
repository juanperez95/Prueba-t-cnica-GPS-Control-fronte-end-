import { defineStore } from 'pinia'
import axios from 'axios' // Realizar peticiones a la API
import {ref} from 'vue'

export const useApiContext = defineStore('api',()=>{

    const datos = ref([]); // Datos de la API

    // Funcion encargada de realizar las peticiones a la API
    const API_CONTEXT = async(url='',metodo="GET",data={})=>{
        // Crear la peticion
        datos.value = await axios.request({
            url: url, // URL de la API
            method: metodo, // Peticion
            data: data, // Datos
        }).then(response => {
            return response.data // Devolver los datos
        }).catch(error => {
            console.log(error) // Mostrar error
        })
        
        return datos.value
    }

    return {
        API_CONTEXT, // Funcion para realizar peticiones a la API
    }

});