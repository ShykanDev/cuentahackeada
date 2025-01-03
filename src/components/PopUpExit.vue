<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
    <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-lg animate-fade-down">
      <div class="flex items-center justify-between mb-4">

        <h2 class="flex items-center text-xl font-semibold text-gray-800">
          <i class="mr-2 fas fa-sign-out-alt"></i>
          Advertencia
        </h2>


        <button class="text-gray-600 hover:text-gray-800">
          <i @click="systemValues.setShowPopupExit(false)" class="fas fa-times"></i>
        </button>
      </div>

      <p class="mb-0 text-gray-700">Está a punto de salir de la página. Al salir, la navegación será responsabilidad del
        usuario. ¿Desea continuar?
      </p>
      <p class="my-3">
        <small>Será redirigido a: <span class="italic break-words text-sky-900">{{ systemValues.getHref
            }}</span></small>

      </p>
      <div class="flex justify-end">
        <button @click="systemValues.setShowPopupExit(false)"
          class="px-4 py-2 mr-2 text-gray-800 bg-gray-300 rounded hover:bg-gray-400">Cancelar</button>
        <a :href="systemValues.getHref">
          <button @click="leavePage" class="px-4 py-2 text-white rounded bg-sky-600 hover:bg-sky-700">Continuar</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SystemValues } from '@/stores/SystemValues';


const systemValues = SystemValues();

const leavePage = () => {
  systemValues.setShowPopupExit(true);
}
</script>

<style scoped></style>
