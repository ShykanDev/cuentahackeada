<template>
  <MainLayout>
    <template #main>
      <section class="bg-orange-400">
        <div class="flex flex-col items-center justify-center min-h-screen p-4 font-poppins">
          <div class="flex flex-col items-center w-full max-w-6xl space-x-3 md:flex-row md:justify-between">
            <div class="mt-6 text-center md:w-1/2 md:text-left md:mt-0 animate-fade-down">
              <h1 class="text-3xl font-bold text-white md:text-4xl">
                Protega sus cuentas, y evite hackeos y robo de información
              </h1>
              <p class="mt-4 text-white">
                Le mostraremos como protegerse de los distintos métodos que los hackers utilizan para
                obtener su información.
              </p>

              <div class="flex items-center p-4 mt-6 text-white bg-orange-600 rounded-lg bg-opacity-85">
                <div>
                  <h3>Evite ser hackeado y perder toda su información, conozca los métodos más comunes de hackeos y robo
                    de información, y aprenda a proteger sus cuentas bancarias, correos electronicos y redes sociales.
                  </h3>
                </div>
              </div>
              <div class="py-8 text-white">
                <p>Aprenderá a como proteger sus
                  cuentas, ya sean de correos electronicos, redes sociales o bancarias, comparta su informacion con
                  otros, evite que otras personas caigan en el robo de su informacion, compartanos su Historia</p>
              </div>
            </div>
            <div class="mt-6 md:w-1/2 animate-fade-up md:mt-0">
              <img alt="A person smiling and making a hand gesture around their eyes" class="w-full h-auto rounded-lg"
                height="400" src="https://i.ibb.co/kxgQPkp/b976c746-2508-4eb2-b9cc-f3ed73c7aaf1-1.jpg" width="600" />
            </div>
          </div>
        </div>

      </section>
      <IntroCard />
      <BankAccountCard />
      <BankAccount2 />
      <BankAccount3 />
      <BankAccount4 />
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
</script>

<style scoped></style>
