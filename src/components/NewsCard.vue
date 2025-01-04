<script setup lang="ts">
// Definir las props con valores predeterminados
const props = defineProps({
  title: {
    type: String,
    default: 'Título de la noticia'
  },
  desc: {
    type: String,
    default: 'Descripción breve de la noticia.'
  },
  href: {
    type: String,
    default: '#'
  },
  img: {
    type: String,
    default: 'https://via.placeholder.com/150'
  }
})
</script>

<template>
  <div class="max-w-sm mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg">
    <!-- Imagen de la noticia -->
    <img :src="props.img" alt="Imagen de la noticia" class="w-full h-48 object-cover" />

    <!-- Contenido de la card -->
    <div class="p-4">
      <!-- Título de la noticia -->
      <h3 class="mb-2 text-xl font-bold text-gray-800">{{ props.title }}</h3>

      <!-- Descripción de la noticia -->
      <p class="mb-4 text-gray-600">{{ props.desc }}</p>

      <!-- Botón para ver la noticia -->
      <a :href="props.href" class="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        target="_blank" rel="noopener noreferrer">
        Ver noticia
      </a>
    </div>
  </div>
</template>

<style scoped>
/* Puedes agregar más estilos personalizados si lo deseas */
</style>
