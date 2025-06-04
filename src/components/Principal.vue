<template>
  <div>
    <section class="p-10">
      <!-- imagen de la esquina superior derecha (minilogo)-->
      <article>
        <img src="../assets/Imagologo_motion.svg" alt="logo">
      </article>
      <article class=" flex flex-col font-[900] justify-center items-center">
        <img src="../assets/Telefono-01.png" alt="telefono">
        
        <!-- Titulo -->
        <h2 class="text-9xl position-absolute z-1 color-text">Bienvenido a </h2><br>
        <h4 class="text-6xl color-text">monitoring innovation</h4>
      </article>
      <!-- enlaces de respositorio y sitios -->
      <section class="color-link font-bold flex flex-row gap-30 p-4 justify-center items-center mt-4">
        <a href="https://monitoringinnovation.com/" target="_blank">MONITORINGINNOVATION</a>
        <a href="https://gpscontrol.co/" target="_blank">GPS CONTROL</a>
        <a href="https://github.com/juanperez95/Prueba-t-cnica-GPS-Control-fronte-end-" target="_blank">Link repo front</a>
        <a href="https://github.com/juanperez95/Prueba-t-cnica-GPS-Control-backend-" target="_blank">Link repo back</a>
      </section>
    </section>
    <!-- Tabla para realizar el CRUD en la API-->
    <section class="flex flex-row gap-5 justify-center items-center">

      <section class="grid grid-cols-3 p-5 ">
        <article>
          <!-- Formulario para interactuar con la API -->
          <Formulario />
        </article>
  
        <!-- Tabla para mostrar e interactuar con la API -->
        <article class="col-span-2 ml-20 w-full">
          <Tabla />
        </article>
        <!-- logo pie de pagina-->
        <article class="col-span-3 justify-self-center mt-10">
          <img src="../assets/Imagologotipo_motion.svg" alt="logo">
        </article>
      </section>
    </section>
  </div>
</template>

<script setup>
// importar componentes
import Formulario from './Formulario.vue'
import Tabla from './Tabla.vue'

</script>

<style scoped>
.grosor {
  font-weight: bolder;

}
  
</style>