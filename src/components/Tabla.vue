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
                <tr class="p-5">
                    <td class=" color_texto border-b-2 border-[#E280BE]">BMW</td>
                    <td class="text-center color_texto border-b-2 border-[#E280BE]">San Juan</td>
                    <td class="flex flex-row gap-4  items-center color_texto border-b-2 border-[#E280BE]">
                        Juan Perez
                        <!-- acciones -->

                        <span><img src="../assets/Icon_eliminar.svg" alt="eliminar" class="size-6"></span>
                        <span><img src="../assets/Icon_editar.svg" alt="editar" class="size-6"></span>

                    </td>
                </tr>               
            </tbody>
        </table>
    </div>
</template>

<script setup>

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