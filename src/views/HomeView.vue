<template>
  <MainLayout>
    <template #main>
      <div class="relative flex items-center justify-center h-screen">
        <img alt="Background image of people working in an office" class="absolute inset-0 object-cover w-full h-full "
          height="1080"
          src="https://storage.googleapis.com/a1aa/image/vEetx2GV23VAbSyceCZoWTxE4de8YeToNu4OsG0BdylIHtDQB.jpg"
          width="1920" />
        <div class="relative z-10 px-4 text-center sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto">

            <h1 class="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl animate-fade-up">
              Protega sus cuentas, y evite hackeos y robo de información
            </h1>
            <p class="mb-8 text-lg text-white sm:text-xl lg:text-2xl animate-fade-up animate-delay-300">
              Le mostraremos como protegerse de los distintos métodos que los hackers utilizan para obtener su
              información.
            </p>
            <div class="flex justify-center space-x-4 animate-fade-up animate-delay-600">
              <!-- router link to login -->
              <RouterLink class="px-4 py-2 font-semibold text-white rounded-full bg-sky-700 hover:bg-gray-800 "
                to="/login">
                Iniciar Sesion
              </RouterLink>
              <!-- router link to register -->
              <RouterLink class="px-4 py-2 font-semibold text-white rounded-full bg-cyan-950 hover:bg-gray-800 "
                to="/register">
                Registrarse
              </RouterLink>
            </div>
          </div>
          <div class="inline-block px-4 py-2 mb-4 bg-gray-800 bg-opacity-75 rounded-full mt-7 animate-fade-down">
            <span class="text-sm text-white">
              Conozca los distintos tipos de hackeo que existen
              <RouterLink class="text-sky-400 animate-pulse hover:text-cyan-600 hover:underline" to="/hackingTypes">
                leer más
                <i class="fas fa-arrow-right ">
                </i>
              </RouterLink>
            </span>
          </div>
        </div>

        <article class="absolute top-0 bottom-0 left-0 right-0 bg-opacity-50 bg-sky-950">

        </article>
      </div>
      <IntroCard />
      <BankAccountCard />
      <BankAccount2 />
      <BankAccount3 />
      <BankAccount4 />
      <ContactBank />
      <!--  -->






    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import IntroCard from '@/components/IntroCard.vue';
import BankAccountCard from '@/components/BankAccountCard.vue';
import BankAccount2 from '@/components/BankAccount2.vue';
import BankAccount3 from '@/components/BankAccount3.vue';
import BankAccount4 from '@/components/BankAccount4.vue';
import { RouterLink } from 'vue-router';
import ContactBank from '@/components/ContactBank.vue';
</script>

<style scoped></style>
