<template>
  <MainLayout>
    <template #main>
      <section class="py-12 bg-white font-poppins">
        <div class="container px-6 mx-auto">
          <div class="mb-12 text-center">
            <h2 class="text-6xl font-bold text-gray-800">
              Sobre Nosotros
            </h2>
            <p class="mt-4 text-gray-600">
              Conoce más sobre nuestra misión, visión y valores.
            </p>
          </div>
          <div class="flex flex-col items-center md:flex-row">
            <div class="md:w-1/2">
              <img alt="Imagen descriptiva de apoyo social y prevención de estafas"
                class="rounded-lg shadow-lg max-h-[680px]" height="200"
                src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=600"
                width="600" />
            </div>
            <div class="mt-8 md:w-1/2 md:pl-12 md:mt-0">
              <h3 class="text-2xl font-semibold text-gray-800">
                Nuestra Misión
              </h3>
              <p class="mt-4 text-gray-600">
                Nuestra misión es proporcionar una plataforma segura y gratuita donde las personas puedan compartir sus
                experiencias sobre hackeos y estafas, ayudando a otros a no caer en fraudes bancarios y otros tipos de
                estafas.
              </p>
              <h3 class="mt-8 text-2xl font-semibold text-gray-800">
                Nuestra Visión
              </h3>
              <p class="mt-4 text-gray-600">
                Aspiramos a ser una comunidad líder en apoyo social, reconocida por nuestra integridad, compromiso y
                dedicación a la seguridad y bienestar de nuestros usuarios.
              </p>
              <h3 class="mt-8 text-2xl font-semibold text-gray-800">
                Nuestros Valores
              </h3>
              <p class="mt-4 text-gray-600">
                Nos guiamos por valores fundamentales como la transparencia, la responsabilidad, la solidaridad y el
                respeto
                por las personas. Creemos en la importancia de compartir conocimientos para prevenir estafas y proteger
                a
                nuestra comunidad.
              </p>
              <div class="mt-8">
                <a class="px-6 py-3 text-white transition duration-300 bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
                  href="#contact">
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped></style>
