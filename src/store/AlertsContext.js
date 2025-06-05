import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useAlertsContext = defineStore('alerts',()=>{

    // funcion para crear las alertas a nivel de la aplicacion
    const alert = (mensaje,texto,icono) => {
        Swal.fire({
            title: mensaje,
            icon: icono,
            text:texto,
            showConfirmButton: false,
            timer: 3000,
            toast: true,
            position: 'top-end',
        })
    }

    return {
        alert,
    }

});