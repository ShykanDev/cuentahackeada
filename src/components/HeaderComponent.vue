<template>
  <div
    class="sticky top-0 z-50 flex items-center justify-between w-full px-3 py-2 text-white bg-orange-400 rounded-b-lg md:py-3 font-poppins ">
    <!-- Logo -->
    <div class="flex items-center">
      <img alt="Logo de la empresa con un diseño moderno y minimalista" class="w-10 h-10 mr-2" height="50"
        src="../assets/sslLogo.png" width="50" />
      <span class="text-xl font-bold text-white font-rubik">
        www.antihackeo.com
      </span>
    </div>

    <!-- Navigation Menu -->
    <nav class="hidden space-x-6 md:flex">
      <RouterLink class="flex items-center p-2 rounded-lg hover:text-blue-100" :to="{ name: 'home' }">
        Inicio
      </RouterLink>
      <RouterLink class="flex items-center p-2 rounded-lg hover:text-blue-100" :to="{ name: 'comments' }">
        Comentarios
      </RouterLink>
      <!-- <a class="flex items-center p-2 rounded-lg hover:text-blue-100" href="#">
        Ayuda
      </a> -->
      <RouterLink class="flex items-center p-2 rounded-lg hover:text-blue-100" :to="{ name: 'login' }">
        Iniciar sesión
      </RouterLink>
      <RouterLink class="flex items-center p-2 rounded-lg hover:text-blue-100" :to="{ name: 'register' }">
        Registrarse
      </RouterLink>
      <RouterLink class="flex items-center p-2 rounded-lg hover:text-blue-100" :to="{ name: 'contact' }">
        Contacto
      </RouterLink>
      <RouterLink class="flex items-center p-2 rounded-lg hover:text-blue-100" :to="{ name: 'register' }">
        Registrarse
      </RouterLink>

      <RouterLink class="flex items-center p-2 rounded-lg hover:text-blue-100" :to="{ name: 'about' }">
        Nosotros
      </RouterLink>
      <RouterLink class="flex items-center p-2 rounded-lg hover:text-blue-100" :to="{ name: 'privacy' }">
        Politica de Privacidad
      </RouterLink>
    </nav>

    <!-- Mobile Menu Button -->
    <div class="md:hidden">
      <button @click="toggleMenu" class="text-white focus:outline-none">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="absolute left-0 w-full bg-orange-500 md:hidden top-full">
      <a class="block px-3 py-2 hover:text-blue-100" href="#">
        <i class="mr-1 fas fa-home"></i> Home
      </a>
      <a class="block px-3 py-2 hover:text-blue-100" href="#">
        <i class="mr-1 fas fa-book"></i> Historias
      </a>
      <a class="block px-3 py-2 hover:text-blue-100" href="#">
        <i class="mr-1 fas fa-lightbulb"></i> Consejos
      </a>
      <a class="block px-3 py-2 hover:text-blue-100" href="#">
        <i class="mr-1 fas fa-sign-in-alt"></i> Iniciar sesión
      </a>
      <a class="block px-3 py-2 hover:text-blue-100" href="#">
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
