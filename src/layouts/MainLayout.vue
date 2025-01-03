<template>
  <div class="w-full ">
    <header class="sticky top-0 z-50 w-full shadow-xl">
      <HeaderComponent />
    </header>
    <main>
      <PopUpExit v-if="systemValues.getShowPopupExit" class="font-lexend " />
      <slot name="main">

      </slot>
    </main>
    <footer class="relative w-full p-8 text-white bg-sky-950 font-roboto">
      <div class="absolute top-4 left-4">
        <i class="text-3xl text-white fas fa-shield-alt">
        </i>
      </div>
      <div class="mb-8 text-center">
        <div class="flex items-center justify-center gap-2 mb-4">
          <i class="text-3xl fas fa-map-signs lg:text-4xl">
          </i>
          <a class="text-sm font-bold lg:text-lg hover:underline" href="#" rel="noopener noreferrer" target="_blank">
            Gutenberg #128 Anzures, Miguel Hidalgo, 11590 Ciudad de México
          </a>
        </div>
      </div>
      <div class="mb-8 text-center">
        <p class="mb-4 font-semibold text-gray-300">
          Sitio gratuito y seguro, usted al compartir sus experiencias ayuda a que otros usuarios no caigan en el mismo
          fraude.
        </p>
        <p class="mb-4 text-gray-300">
          Comparta sus experiencias con los demás, este sitio es gratuito y
          seguro.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-8 text-center md:grid-cols-3">
        <RouterLink class="font-semibold text-white hover:text-gray-400" :to="{ name: 'home' }">
          Inicio
        </RouterLink>
        <RouterLink class="font-semibold text-white hover:text-gray-400" :to="{ name: 'about' }">
          Nosotros
        </RouterLink>
        <RouterLink class="font-semibold text-white hover:text-gray-400" :to="{ name: 'comments' }">
          Comentarios
        </RouterLink>
        <RouterLink class="font-semibold text-white hover:text-gray-400" :to="{ name: 'contact' }">
          Contacto
        </RouterLink>
        <RouterLink class="font-semibold text-white hover:text-gray-400" :to="{ name: 'register' }">
          Registrarse
        </RouterLink>
        <RouterLink class="font-semibold text-white hover:text-gray-400" :to="{ name: 'login' }">
          Iniciar Sesión
        </RouterLink>
        <RouterLink class="font-semibold text-white hover:text-gray-400" :to="{ name: 'privacy' }">
          Aviso de Privacidad
        </RouterLink>
        <RouterLink class="font-semibold text-white hover:text-gray-400" :to="{ name: 'terms' }">
          Términos y Condiciones
        </RouterLink>
      </div>
      <div class="text-center">
        <p class="mb-2 text-sm font-bold lg:text-lg">
          Todos los derechos reservados &copy; <span id="currentYear">
          </span>
        </p>
        <p class="text-sm lg:text-lg">
          Design by
          <strong>
            PACA
          </strong>
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import PopUpExit from '@/components/PopUpExit.vue';
import { SystemValues } from '@/stores/SystemValues';


const systemValues = SystemValues();
</script>

<style scoped></style>
