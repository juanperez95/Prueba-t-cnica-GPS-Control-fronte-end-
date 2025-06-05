<template>
  <div>
    <!-- Animacion de onda -->
    <div class="absolute inset-0">
      <div class="burbuja"></div>
    </div>
    <section>
      <article class="p-7 z-8">
        <!-- Redirigir enlace de logo -->
        <a href="https://monitoringinnovation.com/" target="_blank">
          <img src="../assets/Imagologo_motion.svg" alt="logo">
        </a>
      </article>
    </section>
    <!-- Principal -->
    <section class="p-3 overflow-y-hidden inset-0 z-0">
      <!-- imagen de la esquina superior derecha (minilogo)-->
      <article class="flex flex-col font-[900] justify-center items-center mt-20">
        <h2 class="xl:text-9xl sm:text-8xl md:text-7xl absolute z-0 color-text color-text titulos">Bienvenido a </h2><br>
        <img src="../assets/Telefono-01.png" alt="telefono" class="animacion md:size-60 xl:size-130 sm:size-60">
        
        <!-- Elemento animado (destello lateral) -->
        <div class="absolute inset-0">
          <div class="destello-lateral"></div>
        </div>
        <!-- Titulo -->
        <h4 class="xl:text-6xl sm:text-4xl color-text absolute z-0 mt-50 titulos">monitoring innovation</h4>
      </article>
      <!-- enlaces de respositorio y sitios -->
      <section class="font-bold flex flex-row gap-30 p-4 justify-center items-center mt-4">
        <a href="https://monitoringinnovation.com/" target="_blank" class="color-link">MONITORINGINNOVATION</a>
        <a href="https://gpscontrol.co/" target="_blank" class="color-link">GPS CONTROL</a>
        <a href="https://github.com/juanperez95/Prueba-t-cnica-GPS-Control-fronte-end-" target="_blank" class="color-link">Link repo front</a>
        <a href="https://github.com/juanperez95/Prueba-t-cnica-GPS-Control-backend-" target="_blank" class="color-link">Link repo back</a>
      </section>
    </section>
    <!-- Tabla para realizar el CRUD en la API y hacer scroll-->
    <section class="flex flex-row gap-5 justify-center items-center relative z-10 min-h-screen bg-white">

      <section class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 p-5 ">
        <article class="md:col-span-2 xl:col-span-1 mb-10 justify-self-center">
          <!-- Formulario para interactuar con la API -->
          <Formulario />
        </article>
  
        <!-- Tabla para mostrar e interactuar con la API -->
        <article class="col-span-2 ml-20 w-full">
          <Tabla />
        </article>
        <!-- logo pie de pagina-->
        <article class="col-span-3 justify-self-center mt-40">
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

/* Animacion de la burbuja */
.burbuja {
  background-color: #dadada;
  box-shadow: 0px 0px 10px black;
  width: 100%;
  height: 100vh;
  position: absolute;
  clip-path: circle(0% at 50% 50%);
  animation: burbuja 2s infinite  ease-in-out;
  animation-direction:initial;
  z-index: -1;
}

@keyframes burbuja {
  0% { clip-path: circle(0% at 50% 50%); }
  50% { clip-path: circle(30% at 50% 50%); }
  100% { clip-path: circle(50% at 50% 50%); opacity: 0;}
}
  

/* Animacion de brillo */
.destello-lateral {
  position: absolute;
  top: 0;
  left: -100%; /* Inicia fuera de la pantalla */
  width: 60%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: destello 3s infinite ease-in-out;
}

@keyframes destello {
  0% { left: -100%; }
  50% { left: 100%; }
  100% { left: 100%; }
}

/* Animacion del telefono */
.animacion {
  animation-name: animacion;
  animation: animacion 1s infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;

}

@keyframes animacion {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-7%);
  }
}


/* Animacion del titulo */
.titulos{
  animation-name: title;
  animation: title 3s;
  animation-timing-function: ease-in-out;
  opacity: 1;
}

@keyframes title {
  0%{
    opacity: 0;
    transform: translateY(100px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
  
}



  
</style>