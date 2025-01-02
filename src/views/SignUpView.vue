<template>
  <MainLayout>
    <template #main>
      <div class="flex items-center p-4 mx-auto bg-sky-950 max-w-8xl font-poppins md:h-screen">
        <div
          class="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
          <div
            class="flex flex-col justify-center min-h-full px-4 py-4 space-y-16 max-md:order-1 max-md:mt-16 bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8">
            <div>
              <h4 class="text-lg font-semibold text-white">Crea tu Cuenta</h4>
              <p class="text-[13px] text-gray-300 mt-3 leading-relaxed">¡Bienvenido a nuestra página de registro!
                Comienza creando tu cuenta.</p>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-white">Registro Simple y Seguro</h4>
              <p class="text-[13px] text-gray-300 mt-3 leading-relaxed">Nuestro proceso de registro está diseñado para
                ser sencillo y seguro. Priorizamos tu privacidad y la seguridad de tus datos.</p>
            </div>
          </div>

          <form class="w-full px-6 py-6 bg-white md:col-span-2 sm:px-16">
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-gray-800">Crear una cuenta</h3>
            </div>

            <div class="space-y-6">
              <div>
                <label class="block mb-2 text-sm text-gray-800">Nombre</label>
                <div class="relative flex items-center">
                  <input name="name" type="text" required
                    class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Ingrese su nombre" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="absolute w-4 h-4 right-4"
                    viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-800">Correo Electrónico</label>
                <div class="relative flex items-center">
                  <input name="email" type="email" required
                    class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Ingrese su correo electrónico" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="absolute w-4 h-4 right-4"
                    viewBox="0 0 682.667 682.667">
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path fill="none" stroke-miterlimit="10" stroke-width="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"></path>
                    </g>
                  </svg>
                </div>
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-800">Contraseña</label>
                <div class="relative flex items-center">
                  <input name="password" type="password" required
                    class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Ingrese su contraseña" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                    class="absolute w-4 h-4 cursor-pointer right-4" viewBox="0 0 128 128">
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>

              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox"
                  class="w-4 h-4 text-blue-600 border-gray-300 rounded shrink-0 focus:ring-blue-500" />
                <label for="remember-me" class="block ml-3 text-sm text-gray-800">
                  Acepto los <RouterLink class="font-semibold text-blue-600 hover:underline " :to="{ name: 'terms' }">
                    Terminos y condiciones</RouterLink>
                </label>
              </div>
            </div>

            <div class="!mt-12">
              <button type="button"
                class="w-full px-4 py-3 text-sm tracking-wider text-white bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none">
                Crear una cuenta
              </button>
            </div>
            <p class="mt-6 text-sm text-center text-gray-800">¿Ya tienes una cuenta? <RouterLink
                class="font-semibold text-blue-600 hover:underline " :to="{ name: 'login' }">
                Inicia sesión aquí</RouterLink>
            </p>
            <p class="mt-6 text-sm text-center text-gray-800">
              <RouterLink class="font-semibold text-blue-600 hover:underline " :to="{ name: 'home' }">
                Regresar a la página principal
              </RouterLink>
            </p>
          </form>
        </div>
      </div>

    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped></style>
