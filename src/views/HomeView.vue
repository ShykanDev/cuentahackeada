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
      <ContactBank class="mb-4" />
      <!--  -->
      <section class="p-6 my-2 bg-white rounded-lg shadow-lg">
        <h2 class="mb-6 text-3xl font-bold text-gray-800">
          Publicidad
        </h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <a class="relative block w-full overflow-hidden bg-white rounded-lg shadow-md"
            href="https://www.negocioamerica.com">
            <img alt="Imagen representativa de negocioamerica.com sobre oportunidades de negocio en América"
              class="object-cover w-full h-48" height="300"
              src="https://storage.googleapis.com/a1aa/image/4m0uqJZi4iLrFFI7z6FLbgvuhTdGT6qfSWiCLwVgeoKBfkDoA.jpg"
              width="400" />
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div class="p-4 text-lg font-bold text-center text-white">
                negocioamerica.com - Oportunidades de negocio en América. Encuentra y comparte oportunidades de negocio
                en el continente americano.
              </div>
            </div>
          </a>
          <a class="relative block w-full overflow-hidden bg-white rounded-lg shadow-md"
            href="https://www.harekrishna.com.mx">
            <img alt="Imagen representativa de harekrishna.com.mx sobre la comunidad Hare Krishna en México"
              class="object-cover w-full h-48" height="300"
              src="https://storage.googleapis.com/a1aa/image/lmj2Wto0QaYWCBnafTi87fAckrJlS8xXyNQXbT8T33ODfkDoA.jpg"
              width="400" />
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div class="p-4 text-lg font-bold text-center text-white">
                harekrishna.com.mx - Comunidad Hare Krishna en México. Conoce más sobre la comunidad y sus actividades
                en México.
              </div>
            </div>
          </a>
          <div class="relative block w-full overflow-hidden bg-gray-300 rounded-lg shadow-md">
            <img alt="Imagen de marcador de posición para publicidad pendiente" class="object-cover w-full h-48"
              height="300"
              src="https://storage.googleapis.com/a1aa/image/71VKezwjf4vLr03w4MqrhD1024UCUeeKAQi2Ghfew3UUxncAF.jpg"
              width="400" />
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div class="p-4 text-lg font-bold text-center text-white">
                Publicidad pendiente
              </div>
            </div>
          </div>
        </div>
      </section>



      <h2 class="mb-6 text-5xl font-bold text-center text-gray-800 my-7">Noticias</h2>
      <section class="flex flex-wrap justify-center gap-4">
        <NewsCard v-for="news in newsArray" :key="news.title" :title="news.title" :desc="news.desc" :href="news.href"
          :img="news.img" />
      </section>

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
import NewsCard from '@/components/NewsCard.vue';


const newsArray = [
  {
    title: "Tu correo electrónico podría no ser seguro: descubren millones de servidores sin cifrado habilitado",
    desc: "Puede que tus correos electrónicos estén cada vez más cerca de ser interceptados por los ciberdelincuentes. Muchos hosts de correo electrónico no son del todo seguros.",
    href: "https://computerhoy.20minutos.es/ciberseguridad/correo-electronico-podria-no-ser-seguro-descubren-millones-servidores-cifrado-habilitado-1433775",
    img: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2025/01/phishing-email-4279390.jpg?tf=1200x"
  },
  {
    title: "\"Agrégame a WhatsApp\", la peligrosa estafa que puede dejar vacía tu cuenta corriente",
    desc: "Debes conocer como sea la nueva estafa de “agrégame a WhatsApp” que está afectando a muchas personas. En esto consiste y qué debes hacer para evitarla.",
    href: "https://computerhoy.20minutos.es/ciberseguridad/agregame-whatsapp-peligrosa-estafa-puede-dejar-vacia-cuenta-corriente-1433739",
    img: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2024/10/estafas-whatsapp-disparan-consejos-rapidos-sencillos-protegerte-4249934.jpg?tf=1200x"
  },
  {
    title: "El timo de la llamada perdida sigue activo en 2025: cuidado si ves estos prefijos en tu móvil",
    desc: "La estafa de la llamada perdida, también conocido como \"Wangiri\", esta clásica estafa vuelve a estar de máxima actualidad: esto es lo que tienes que saber para no caer en la trampa de nuevo.",
    href: "https://computerhoy.20minutos.es/ciberseguridad/timo-llamada-perdida-sigue-activo-2025-cuidado-ves-estos-prefijos-movil-1433516",
    img: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2024/11/estafa-bizum-alerta-guardia-civil-mucho-cuidado-no-caer-trampa-4260044.jpg?tf=1200x"
  },
  {
    title: "\"Ni con tu teclado\": Búsquedas en Google que los expertos en seguridad evitan hacer a toda costa",
    desc: "Si bien Google es una herramienta indispensable en nuestro día a día, es fundamental ser conscientes de los peligros y amenazas que se esconden tras las búsquedas. El SEO poisoning es una técnica usada por ciberdelincuentes para engañarte y robar tu información.",
    href: "https://computerhoy.20minutos.es/ciberseguridad/ni-teclado-busquedas-google-expertos-seguridad-evitan-hacer-toda-costa-1427868",
    img: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2024/12/ni-teclado-busquedas-google-expertos-seguridad-evitan-hacer-toda-costa-4269725.jpg?tf=1200x"
  },
  {
    title: "Los expertos en seguridad no puede ser más claros: NO respondas a este mensaje de Google",
    desc: "Siguiendo estas recomendaciones de expertos en seguridad, puedes reducir significativamente el riesgo de caer en la estafa de Google y proteger tu información personal y financiera. Los estafadores pueden hacerse de tus datos en minutos a través de Google Calendar.",
    href: "https://computerhoy.20minutos.es/ciberseguridad/expertos-seguridad-no-puede-ser-claros-no-respondas-mensaje-google-1432964",
    img: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2024/12/expertos-seguridad-no-puede-ser-claros-no-respondas-mensaje-google-4278261.jpg?tf=1200x"
  }
]

</script>

<style scoped></style>
