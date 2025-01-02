<template>
  <div class="relative p-6 font-poppins">
    <div class="mx-auto overflow-hidden bg-white rounded-lg shadow-md max-w-7xl bg-opacity-90">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img
            alt="Image of an ATM machine with a skimming device attached to the card slot and a hidden camera to capture PIN entry"
            class="object-cover w-full h-48 md:w-64 md:h-full animate-fade" :src='imgSrc' />
        </div>
        <div class="p-8">
          <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            {{ titleCard }}
          </div>
          <h1 class="block mt-1 text-lg font-medium leading-tight text-black">
            {{ shortSummary }}
          </h1>
          <p class="mt-2 text-gray-800">
            {{ info1 }}
          </p>
          <p class="mt-2 text-gray-800">
            {{ info2 }}

          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  titleCard: {
    type: String,
    default: 'Default Title',
  },
  shortSummary: {
    type: String,
    default: 'Default Summary',
  },
  info1: {
    type: String,
    default: 'Default Info 1',
  },
  info2: {
    type: String,
    default: 'Default Info 2',
  },
  imgSrc: {
    type: String,
    default: 'https://storage.googleapis.com/a1aa/image/UcyojKTulm4xFxmzURC6eLNeY92tfgfIwifWyfb4gXE4zVPAF.jpg',
  }
})
</script>

<style scoped></style>
