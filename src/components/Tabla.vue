<template>
    <div>
        <table class="ml-7">
            <thead>
                <tr class="">
                    <th class="text-center px-10 p-2 encabezado text-white">Marca</th>
                    <th class="text-center px-10 p-2 encabezado text-white">Sucursal</th>
                    <th class="text-center px-10 p-2 encabezado text-white">Aspirante</th>
                </tr>
            </thead>
            <tbody>
                <!-- iterar por cada elemento de la API -->
                <tr class="p-5" v-for="elemento in datosTabla.data.data" :key="elemento.id">
                    <td class=" color_texto border-b-2 border-[#E280BE]">{{ elemento.marca }}</td>
                    <td class="text-center color_texto border-b-2 border-[#E280BE]">{{ elemento.surcursal }}</td>
                    <td class="grid grid-cols-2 gap-5  items-center color_texto border-b-2 border-[#E280BE]">
                        <article>
                            {{ elemento.aspirante }}
                        </article>
                        <!-- acciones -->
                        <article class="p-2 flex gap-2">
                            <!-- boton de editar -->
                            <span v-show="datosTabla.actualizar_eliminar"><img src="../assets/Icon_editar.svg" alt="editar" class="size-6" ></span>
                            <span v-show="!datosTabla.actualizar_eliminar"><img src="../assets/Icon_editar1.svg" alt="editar" class="size-6" @click="actualizarDato(elemento.id)"></span>
                            <!-- boton de eliminar -->
                            <span v-show="!datosTabla.actualizar_eliminar"><img src="../assets/Icon_eliminar1.svg" alt="eliminar" class="size-6" @click="eliminarDato(elemento.id)"></span>
                            <span v-show="datosTabla.actualizar_eliminar"><img src="../assets/Icon_eliminar.svg" alt="eliminar" class="size-6" ></span>
                        </article>

                    </td>
                </tr>    
                <tr v-if="datosTabla.data.length === 0">
                    <td colspan="3" class="text-center color_texto mt-5 text-2xl">¡No hay datos disponibles!</td>
                </tr>           
            </tbody>
        </table>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {useApiContext} from '../store/ApiContext.js'
import {useDataContext} from '../store/DataContext.js'
import {useAlertsContext} from '../store/AlertsContext.js'

const api = useApiContext() // Manejar datos de la API

const datosTabla = useDataContext() // Manejar datos de la tabla


const alertas = useAlertsContext() // Manejar alertas


// Al renderizar la tabla se llaman los datos de la base de datos
onMounted(async() => {
    datosTabla.data = await api.API_CONTEXT('https://backend-gpscontrol.onrender.com/api/concesionario/')
})

// Funcion para actualizar los datos de la tabla
const actualizarDato = async(id) => {
    datosTabla.actualizar_eliminar = true;
    const actualizar = datosTabla.data.data.find(elemento => elemento.id === id);
    // Asignar los datos a las varialbes de los inputs
    datosTabla.datosForm.id = actualizar.id;
    datosTabla.datosForm.marca = actualizar.marca;
    datosTabla.datosForm.surcursal = actualizar.surcursal;
    datosTabla.datosForm.aspirante = actualizar.aspirante;
    datosTabla.dinamica = true; // Activar el color de los iconos
    datosTabla.actualizar = true; // Activar los botones de actualizar
    datosTabla.crear = false; // Quitar el estado de crear objeto si va a editar o eliminar objeto
}

// Funcion para eliminar los datos de la tabla
const eliminarDato = async(id) => {
    const response = await api.API_CONTEXT('https://backend-gpscontrol.onrender.com/api/concesionario/'+id,'DELETE');
    if(response.delete === true){
        alertas.alert("Datos eliminados","Datos eliminados con exito","success")
        datosTabla.data = await api.API_CONTEXT('https://backend-gpscontrol.onrender.com/api/concesionario/')
    }
}

</script>

<style scoped>
.encabezado{
    color:white;
    background-color: #E280BE;
}

.color_texto{
    color:gray
}
    
</style>