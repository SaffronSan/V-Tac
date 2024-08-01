<template>
  <article class="flex flex-col justify-center p-4 space-y-4 rounded-lg dark-theme bg-zinc-50 dark:bg-zinc-900 w-96">
    <div class="flex space-x-2 my-auto p-2">
      <infoIcon class="w-8 md:w-10"/>
      <p>Game mode empty!</p>
    </div>
    <button @click="collBoos.valid = true" class="btn bg-neutral-700 p-2 hover:bg-red-600 ease-in">Dismiss</button>
  </article>
</template>
<script setup>
  import infoIcon from './icons/infoIcon.vue';
  import state from '../composables/states.js'
  const {collBoos} = state;
</script>