import { defineStore } from 'pinia'
import {ref,reactive} from 'vue'

export const useDataContext = defineStore('data',()=>{

    const data = ref([]); // Datos de el concesionario
    const dinamica = ref(false); // Para validar si los iconos deben activarsen entrela tabla y el formulario
    const actualizar = ref(false); // para activar los botones de solo activar

    const actualizar_eliminar = ref(false) // Variable para activar el boton de actualizar o eliminar en la tabla
    const crear = ref(false); // Variables encargada de activar los botones al crear objetos

    // Datos para manejar los datos del formulario entre la tabla
    const datosForm = reactive({
        id:'',
        marca: '',
        surcursal:'',
        aspirante:''
    })

    return {
        data,datosForm, dinamica, actualizar, actualizar_eliminar,crear
    }

});