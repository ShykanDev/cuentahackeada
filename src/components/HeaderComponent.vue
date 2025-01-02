<template>
  <div
    class="sticky top-0 z-50 flex items-center justify-between w-full px-3 py-2 text-white rounded-b-lg bg-sky-600 md:py-3 font-poppins ">
    <!-- Logo -->
    <div class="flex items-center">
      <img alt="Logo SSL" class="w-8 h-10 mr-2" src="../assets/sslwhite.png" />
      <span class="text-xl font-bold text-white font-lexend">
        www.antihackeo.com
      </span>
    </div>

    <!-- Navigation Menu -->
    <nav class="hidden space-x-6 md:flex font-lexend">
      <RouterLink class="flex items-center p-2 rounded-lg hover:text-white hover:underline hover:rounded-full "
        :to="{ name: 'home' }">
        Inicio
      </RouterLink>
      <RouterLink class="flex items-center p-2 rounded-lg hover:text-white hover:underline"
        :to="{ name: 'hackingTypes' }">
        Tipos de hackeo
      </RouterLink>
      <RouterLink class="flex items-center p-2 rounded-lg hover:text-white hover:underline" :to="{ name: 'comments' }">
        Comentarios
      </RouterLink>
      <!-- <a class="flex items-center p-2 rounded-lg hover:text-white hover:underline" href="#">
        Ayuda
      </a> -->

      <RouterLink class="flex items-center p-2 rounded-lg hover:text-white hover:underline" :to="{ name: 'contact' }">
        Contacto
      </RouterLink>

      <RouterLink class="flex items-center p-2 rounded-lg hover:text-white hover:underline" :to="{ name: 'about' }">
        Nosotros
      </RouterLink>
      <RouterLink class="flex items-center p-2 rounded-lg hover:text-white hover:underline" :to="{ name: 'about' }">
        Política
      </RouterLink>

      <RouterLink class="flex items-center p-2 bg-white rounded-lg text-sky-600 hover:text-sky-700"
        :to="{ name: 'login' }">
        Iniciar sesión
      </RouterLink>
      <RouterLink class="flex items-center p-2 rounded-lg bg-sky-800 hover:text-white hover:underline"
        :to="{ name: 'register' }">
        Registrarse
      </RouterLink>
    </nav>

    <!-- Mobile Menu Button -->
    <div class="md:hidden">
      <button @click="toggleMenu" class="text-white focus:outline-none">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="absolute left-0 w-full bg-sky-500 md:hidden top-full">
      <a class="block px-3 py-2 hover:text-white hover:underline" href="#">
        <i class="mr-1 fas fa-home"></i> Home
      </a>
      <a class="block px-3 py-2 hover:text-white hover:underline" href="#">
        <i class="mr-1 fas fa-book"></i> Historias
      </a>
      <a class="block px-3 py-2 hover:text-white hover:underline" href="#">
        <i class="mr-1 fas fa-lightbulb"></i> Consejos
      </a>
      <a class="block px-3 py-2 hover:text-white hover:underline" href="#">
        <i class="mr-1 fas fa-sign-in-alt"></i> Iniciar sesión
      </a>
      <a class="block px-3 py-2 hover:text-white hover:underline" href="#">
        <i class="mr-1 fas fa-user-plus"></i> Registrarse
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
