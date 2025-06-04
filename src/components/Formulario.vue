<template>
    <div>
    <!-- Formulario para interactuar con la API -->
        <form class="flex flex-col gap-1 p-4 ml-10 border-2 border-gray-300 rounded-xl shadow-xl" @submit.prevent>
            <!-- icono de crear -->
            <span><img src="../assets/Icon_crear.svg" alt="crear" class="size-6" @click="()=>{crear=!crear}"></span>
            <!-- campos de entrada -->
            <article class="p-5 flex gap-5 flex-row">
                <span>
                    <img v-show="!crear" src="../assets/Icon_vehiculo.svg" alt="vehiculo">
                    <img v-show="crear" src="../assets/Icon_vehiculo1.svg" alt="vehiculo">
                </span>
                <input type="text" name="marca" id="marca" class="entrada" placeholder="Marca">
            </article>
            <article class="p-5 flex gap-5 flex-row">
                <span>
                    <img v-show="!crear" src="../assets/Icon_puntoubicacion.svg" alt="punto">
                    <img v-show="crear" src="../assets/Icon_puntoubicacion1.svg" alt="punto">
                </span>
                <input type="text" name="sucursal" id="sucursal" class="entrada" placeholder="Sucursal">
            </article>
            <article class="p-5 flex gap-5 flex-row">
                <span>
                    <img v-show="!crear" src="../assets/Icon_persona.svg" alt="persona">
                    <img v-show="crear" src="../assets/Icon_persona1.svg" alt="persona">
                </span>
                <input type="text" name="aspirante" id="aspirante" class="entrada" placeholder="Aspirante">
            </article>
            <!-- boton de crear cuando se pulsa el icono de + -->
            <article class="flex flex-row gap-5 justify-center items-center" v-show="crear">
                <!-- aldar click en el boton de cancelar se ocultan los botones -->
                <Boton mensaje="Cancelar" color="#E280BE" tipo="button" @funcion_btn="()=>{crear=!crear}"/>
                <Boton mensaje="Crear" color="#00249C" tipo="submit"/>
            </article>
        </form>
    </div>
</template>

<script setup>
// Importar componente boton
import Boton from './utils/Boton.vue'
import {ref, reactive} from 'vue';

const crear = ref(false);

const imagenes = reactive({
    marca: '../assets/Icon_vehiculo.svg',
    sucursal:'../assets/Icon_puntoubicacion.svg',
    aspirante:'../assets/Icon_persona.svg'
})



</script>
<style scoped>
    
</style>