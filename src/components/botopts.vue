<template>
  <article class="h-full items-center flex flex-col">
    <div class="art-head dark-theme w-96">
      <h1 class="text-2xl text-center p-3">Choose Difficulty</h1>
    </div>
    
    <div class="flex flex-col art-body dark-theme  text-center p-4 gap-1 w-96">
      <label @click="$emit('handleEmits',item)" 
        class="hover:shadow-lg hover:cursor-pointer rounded-md shadow p-2" 
        v-for="(item,index) in ['Easy','Medium','Hard']">
        {{item}}
      </label>
      <button @click="$emit('handleNone',false)" class="bg-white text-sky-600 hover:shadow-lg hover:cursor-pointer rounded-md shadow p-2">Back</button>
    </div>
  </article>
</template>

<script setup>
  
</script>