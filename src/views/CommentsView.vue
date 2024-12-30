<template>
  <MainLayout>
    <template #main>
      <div id="app" class="container p-4 mx-auto">
        <h1 class="mb-6 text-6xl font-bold text-center font-afacad">Experiencias de Estafas</h1>
        <div v-for="comment in comments" :key="comment.id" class="p-4 mb-4 bg-white rounded-lg shadow-md"
          :class="`animate-fade-left animate-delay-[${comment.id * 500}ms]`">
          <div class="flex items-center mb-2">
            <i class="mr-4 text-4xl fas fa-user-circle"></i>
            <div>
              <h2 class="text-xl font-semibold">{{ comment.name }}</h2>
              <p class="text-gray-600">{{ comment.date }}</p>
            </div>
          </div>
          <p class="text-gray-800">{{ comment.text }}</p>
          <div class="flex justify-between mt-4">
            <button class="text-blue-500 hover:text-blue-700">
              <i class="fas fa-thumbs-up"></i> Me gusta
            </button>
            <button class="p-1 text-white bg-orange-500 rounded-md hover:text-red-700">
              <i class="fas fa-chat"></i> Responder
            </button>
          </div>
        </div>
      </div>
      <section class="flex justify-center my-3 ">
        <!-- button to add commment orange -->
        <button
          class="flex items-center justify-center px-4 py-2 text-white bg-orange-500 rounded-lg font-poppins hover:bg-orange-600">
          Agregar comentario
        </button>
      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';

const comments = ref([
  {
    id: 1,
    name: 'Juan Pérez',
    date: '2023-10-01',
    text: 'Fui víctima de un hackeo en mi cuenta bancaria. Perdí una gran cantidad de dinero y fue una experiencia muy estresante.',
    image: 'https://placehold.co/100x100?text=Profile+Image&bg=gray'
  },
  {
    id: 2,
    name: 'María López',
    date: '2023-09-15',
    text: 'Alguien accedió a mis redes sociales y comenzó a enviar mensajes a mis contactos pidiendo dinero. Fue muy difícil recuperar el control de mis cuentas.',
    image: 'https://placehold.co/100x100?text=Profile+Image&bg=gray'
  },
  {
    id: 3,
    name: 'Carlos García',
    date: '2023-08-20',
    text: 'Recibí un correo electrónico que parecía ser de mi banco, pero resultó ser una estafa. Afortunadamente, no caí en la trampa, pero fue una experiencia aterradora.',
    image: 'https://placehold.co/100x100?text=Profile+Image&bg=gray'
  },
  {
    id: 4,
    name: 'Ana Martínez',
    date: '2023-07-30',
    text: 'Me hackearon la cuenta de correo electrónico y utilizaron mi identidad para estafar a otras personas. Fue un proceso largo y complicado recuperar mi cuenta.',
    image: 'https://placehold.co/100x100?text=Profile+Image&bg=gray'
  },
  {
    id: 5,
    name: 'Luis Fernández',
    date: '2023-06-25',
    text: 'Perdí acceso a mi cuenta de Facebook y el hacker comenzó a publicar contenido inapropiado. Fue muy vergonzoso y difícil de solucionar.',
    image: 'https://placehold.co/100x100?text=Profile+Image&bg=gray'
  },
  {
    id: 6,
    name: 'Elena Gómez',
    date: '2023-05-10',
    text: 'Recibí una llamada telefónica de alguien que se hacía pasar por un representante de mi banco. Casi caigo en la trampa, pero afortunadamente me di cuenta a tiempo.',
    image: 'https://placehold.co/100x100?text=Profile+Image&bg=gray'
  },
  {
    id: 7,
    name: 'Miguel Torres',
    date: '2023-04-18',
    text: 'Alguien utilizó mi tarjeta de crédito para hacer compras en línea sin mi autorización. Fue un proceso largo y complicado recuperar mi dinero.',
    image: 'https://placehold.co/100x100?text=Profile+Image&bg=gray'
  },
  {
    id: 8,
    name: 'Laura Sánchez',
    date: '2023-03-22',
    text: 'Me hackearon la cuenta de Instagram y comenzaron a enviar mensajes a mis seguidores pidiendo dinero. Fue muy difícil recuperar el control de mi cuenta.',
    image: 'https://placehold.co/100x100?text=Profile+Image&bg=gray'
  },
  {
    id: 9,
    name: 'Jorge Ramírez',
    date: '2023-02-14',
    text: 'Recibí un mensaje de texto que parecía ser de mi banco, pero resultó ser una estafa. Afortunadamente, no caí en la trampa, pero fue una experiencia aterradora.',
    image: 'https://placehold.co/100x100?text=Profile+Image&bg=gray'
  },
  {
    id: 10,
    name: 'Patricia Ruiz',
    date: '2023-01-30',
    text: 'Alguien accedió a mi cuenta de correo electrónico y comenzó a enviar mensajes a mis contactos pidiendo dinero. Fue muy difícil recuperar el control de mi cuenta.',
    image: 'https://placehold.co/100x100?text=Profile+Image&bg=gray'
  },
  {
    id: 11,
    name: 'Roberto Díaz',
    date: '2022-12-25',
    text: 'Perdí acceso a mi cuenta de Twitter y el hacker comenzó a publicar contenido inapropiado. Fue muy vergonzoso y difícil de solucionar.',
    image: 'https://placehold.co/100x100?text=Profile+Image&bg=gray'
  },
  {
    id: 12,
    name: 'Carmen Morales',
    date: '2022-11-18',
    text: 'Recibí una llamada telefónica de alguien que se hacía pasar por un representante de mi banco. Casi caigo en la trampa, pero afortunadamente me di cuenta a tiempo.',
    image: 'https://placehold.co/100x100?text=Profile+Image&bg=gray'
  },
  {
    id: 13,
    name: 'Francisco Herrera',
    date: '2022-10-10',
    text: 'Alguien utilizó mi tarjeta de débito para hacer compras en línea sin mi autorización. Fue un proceso largo y complicado recuperar mi dinero.',
    image: 'https://placehold.co/100x100?text=Profile+Image&bg=gray'
  },
  {
    id: 14,
    name: 'Isabel Castro',
    date: '2022-09-05',
    text: 'Me hackearon la cuenta de LinkedIn y comenzaron a enviar mensajes a mis contactos pidiendo dinero. Fue muy difícil recuperar el control de mi cuenta.',
    image: 'https://placehold.co/100x100?text=Profile+Image&bg=gray'
  },
  {
    id: 15,
    name: 'Antonio Vargas',
    date: '2022-08-20',
    text: 'Recibí un correo electrónico que parecía ser de mi banco, pero resultó ser una estafa. Afortunadamente, no caí en la trampa, pero fue una experiencia aterradora.',
    image: 'https://placehold.co/100x100?text=Profile+Image&bg=gray'
  }
]);
</script>

<style scoped></style>
