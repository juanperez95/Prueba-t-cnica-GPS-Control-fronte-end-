<template>
    <div>
        <section>
            <button @click="clickBoton" :class="`p-2 rounded-xl text-gray-400 border-2 border-[${color}] transition-ease-in-out duration-100 hover:text-black`" :type="tipo">{{ mensaje }}</button>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Propiedades del boton
const props = defineProps({
    mensaje:String, 
    color:String,
    tipo:String
})

// Propiedad para evento del boton
const emit = defineEmits(['funcion_btn']);

// Funcion que dispara el evento
const clickBoton = () => {
    emit('funcion_btn');
}

</script>

<style scoped>
    
</style>