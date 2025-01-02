<template>
  <MainLayout>
    <template #main>
      <div v-if="showModal"
        class="fixed inset-0 top-0 bottom-0 left-0 right-0 z-40 flex items-center justify-center w-full bg-gray-800 bg-opacity-75 font-lexend">
        <div class="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <!-- fas fa icon close  -->
          <i class="absolute text-xl cursor-pointer fas fa-times text-emerald-900 top-4 right-4"
            @click="toggleModal"></i>
          <h2 class="mb-4 text-2xl font-bold text-gray-800">Recuperación de Contraseña</h2>
          <p class="mb-6 text-gray-600">Por favor, introduzca su correo electrónico para reestablecer su contraseña.</p>
          <form>
            <div class="mb-4">
              <label for="email" class="block mb-2 font-medium text-gray-700">Correo Electrónico</label>
              <input type="email" id="email" name="email"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="ejemplo@correo.com" required>
            </div>
            <button type="submit"
              class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Reestablecer Contraseña
            </button>
          </form>
        </div>
      </div>
      <div class="font-poppins animate-jump bg-slate-100">
        <div class="flex items-center justify-center min-h-screen px-4 py-6 fle-col">
          <div class="grid items-center w-full max-w-6xl gap-4 md:grid-cols-2">
            <div
              class="border border-sky-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto bg-white">
              <form class="space-y-4">
                <div class="mb-8">
                  <h3 class="text-3xl font-extrabold text-sky-500">Iniciar sesion</h3>
                  <p class="mt-4 text-sm leading-relaxed text-gray-500">Inicie sesion con sus credenciales, y comparta
                    sus historias con los usuarios</p>
                </div>

                <div>
                  <label class="block mb-2 text-sm text-gray-800">Correo</label>
                  <div class="relative flex items-center">
                    <input name="username" type="email" required
                      class="w-full px-4 py-3 text-sm text-gray-800 border border-gray-300 rounded-lg outline-blue-600"
                      placeholder="Introduzca su correo" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                      class="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                      <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <label class="block mb-2 text-sm text-gray-800">Contraseña</label>
                  <div class="relative flex items-center">
                    <input name="password" type="password" required
                      class="w-full px-4 py-3 text-sm text-gray-800 border border-gray-300 rounded-lg outline-blue-600"
                      placeholder="Introduzca su contraseña" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                      class="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
                </div>

                <div class="flex flex-wrap items-center justify-between gap-4">


                  <div class="text-sm">
                    <a href="jajvascript:void(0);" @click="toggleModal"
                      class="font-semibold text-blue-600 hover:underline">
                      Olvide mi contraseña
                    </a>
                  </div>
                </div>

                <div class="!mt-8">
                  <button type="button"
                    class="w-full px-4 py-3 text-sm tracking-wide text-white bg-blue-600 rounded-lg shadow-xl hover:bg-blue-700 focus:outline-none">
                    Log in
                  </button>
                </div>

                <p class="text-sm !mt-8 text-center text-gray-800">¿No tiene una cuenta?
                  <RouterLink class="font-semibold text-blue-600 hover:underline " :to="{ name: 'register' }">
                    Registrese aquí
                  </RouterLink>
                </p>
              </form>
            </div>
            <div class="lg:h-[400px] md:h-[300px] max-md:mt-8">
              <img src="../assets/login-image.webp"
                class="block object-cover w-full h-full mx-auto rounded-lg max-md:w-4/5" alt="Dining Experience" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';

const showModal = ref(false);


const toggleModal = () => showModal.value = !showModal.value;
</script>

<style scoped></style>
