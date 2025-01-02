<template>
  <MainLayout>
    <template #main>
      <div id="app" class="w-full p-4 bg-white">
        <h1 class="mb-6 text-6xl font-bold text-center font-lexend text-sky-800">Experiencias de Estafas</h1>
        <div v-for="comment in comments" :key="comment.id"
          class="p-4 mb-4 ease-out rounded-lg shadow-md bg-slate-50 hover:border-2 hover:border-sky-500 hover:shadow-lg">
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
            <button class="p-1 text-white bg-orange-500 rounded-md hover:scale-105">
              <i class="fas fa-chat"></i> Responder
            </button>
          </div>
        </div>
      </div>
      <section class="p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 class="text-3xl font-bold text-sky-950 font-lexend mb-4 flex items-center">
          <i class="fas fa-comment-dots text-sky-500 mr-3"></i> Agregue un nuevo comentario
        </h2>
        <textarea name="comment" id="comment"
          class="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          placeholder="Escribe tu comentario aquí..." rows="5">
  </textarea>
      </section>

      <section class="flex justify-center my-6">
        <button
          class="flex items-center justify-center px-6 py-3 text-white bg-orange-500 rounded-lg font-poppins text-lg font-medium hover:bg-orange-600 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
          <i class="fas fa-paper-plane mr-3"></i> Agregar comentario
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

const liked = ref(false);

const toggleLike = () => liked.value = !liked.value;
</script>

<style scoped></style>
