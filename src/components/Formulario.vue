<template>
    <div>
    <!-- Formulario para interactuar con la API -->
        <form class="flex flex-col gap-1 p-4 ml-10 border-2 border-[#C5C5C5] rounded-xl shadow-xl" @submit.prevent="enviarDatos">
            <!-- icono de crear -->
            <span><img src="../assets/Icon_crear.svg" alt="crear" class="size-6" @click="()=>{datosTabla.dinamica=!datosTabla.dinamica;datosTabla.crear=!datosTabla.crear;datosTabla.actualizar=false}"></span>
            <!-- campos de entrada -->
            <article class="p-5 flex gap-5 flex-row">
                <span>
                    <img v-show="!datosTabla.dinamica" src="../assets/Icon_vehiculo.svg" alt="vehiculo">
                    <img v-show="datosTabla.dinamica" src="../assets/Icon_vehiculo1.svg" alt="vehiculo">
                </span>
                <input type="text" name="marca" id="marca" class="entrada" placeholder="Marca" v-model="datosTabla.datosForm.marca" :disabled="!datosTabla.dinamica">
            </article>
            <article class="p-5 flex gap-5 flex-row">
                <span>
                    <img v-show="!datosTabla.dinamica" src="../assets/Icon_puntoubicacion.svg" alt="punto">
                    <img v-show="datosTabla.dinamica" src="../assets/Icon_puntoubicacion1.svg" alt="punto">
                </span>
                <select name="surcursal" id="surcursal" class="entrada" placeholder="Sucursal" v-model="datosTabla.datosForm.surcursal" :disabled="!datosTabla.dinamica">
                    <option v-for="localidad in localidades.localidades" :key="localidad.id" :value="localidad.nombre">{{ localidad.nombre }}</option>
                </select>
            </article>
            <article class="p-5 flex gap-5 flex-row">
                <span>
                    <img v-show="!datosTabla.dinamica" src="../assets/Icon_persona.svg" alt="persona">
                    <img v-show="datosTabla.dinamica" src="../assets/Icon_persona1.svg" alt="persona">
                </span>
                <input type="text" name="aspirante" id="aspirante" class="entrada" placeholder="Aspirante" v-model="datosTabla.datosForm.aspirante" :disabled="!datosTabla.dinamica">
            </article>
            <!-- boton de crear cuando se pulsa el icono de + -->
            <article class="flex flex-row gap-5 justify-center items-center" v-show="datosTabla.crear">
                <!-- aldar click en el boton de cancelar se ocultan los botones -->
                <Boton mensaje="Cancelar" color="#E280BE" tipo="button" @funcion_btn="()=>{datosTabla.dinamica=!datosTabla.dinamica;datosTabla.crear=!datosTabla.crear}"/>
                <Boton mensaje="Crear" color="#00249C" tipo="submit"/>
            </article>

            <!-- botones de actualizar y eliminar -->
            <article class="flex flex-row gap-5 justify-end items-center mr-5" v-show="datosTabla.actualizar">
                <span><img src="../assets/Icon_cancelar.svg" alt="confirmar" class="size-8 cursor-pointer" @click="()=>{datosTabla.actualizar=false;datosTabla.dinamica=false;datosTabla.actualizar_eliminar=false}"></span>
                <span><img src="../assets/Icon_confirmar.svg" alt="confirmar" class="size-8 cursor-pointer" @click="actualizarDato"></span>
            </article>
        </form>
    </div>
</template>

<script setup>
// Importar componente boton
import Boton from './utils/Boton.vue'
import {ref, reactive} from 'vue';
import localidades from '../sucursales/localidades.json' // Importar archivo JSON de localidades
import {useApiContext} from '../store/ApiContext.js'
import {useDataContext} from '../store/DataContext.js'
import {useAlertsContext} from '../store/AlertsContext.js'


const Api = useApiContext() // Manejar peticiones a la API de manera global
const datosTabla = useDataContext() // Manejar datos de la tabla
const alertas = useAlertsContext() // Manejar alertas


// const actualizar = ref(false); // Variables encargada de activar los botones al actualizar objetos



// Funcion para enviar los datos al backend
const enviarDatos = async() => {
    let response = await Api.API_CONTEXT('http://localhost:8000/api/concesionario/','POST',datosTabla.datosForm);
    // Validar la respuesta del servidor 
    if(response.data === true){
        // mostrar alerta
        alertas.alert("Datos guardados","Datos guardados con exito","success")
        // Volver a llamar a la API para actualizar los datos
        datosTabla.data = await Api.API_CONTEXT('http://localhost:8000/api/concesionario/')
        datosTabla.dinamica = false;
        // limpiar datos
        datosTabla.datosForm.marca = '';
        datosTabla.datosForm.surcursal = '';
        datosTabla.datosForm.aspirante = '';
        datosTabla.crear = false; 
    
    }else if(response.data.data === false){
        alertas.alert("Error al guardar los datos","No se pudieron guardar los datos","error")
    }
}

// Funcion para actualizar los datos de base de datos
const actualizarDato = async(id) => {
    let response = await Api.API_CONTEXT('http://localhost:8000/api/concesionario/'+datosTabla.datosForm.id,'PUT',datosTabla.datosForm);
    // mostrar alerta de que se actualizaron los datos
    if(response.update === true){
        alertas.alert("Datos actualizados","Datos actualizados con exito","success")
        datosTabla.data = await Api.API_CONTEXT('http://localhost:8000/api/concesionario/')
        datosTabla.dinamica = false;
        // limpiar datos
        datosTabla.datosForm.marca = '';
        datosTabla.datosForm.surcursal = '';
        datosTabla.datosForm.aspirante = '';
        datosTabla.actualizar = false; // Volver al estado inicial
        datosTabla.actualizar_eliminar = true; // Volver al estado inicial

    }else{
        alertas.alert("Error al actualizar los datos","No se pudieron actualizar los datos","error")
    }
}




</script>
<style scoped>
    
</style>