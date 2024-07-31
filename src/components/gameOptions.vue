<template>
  <article class="h-full items-center flex flex-col">
    <div class="art-head rounded-t-lg text-center dark-theme bg-zinc-50 dark:bg-zinc-900 w-96">
      <h1 class="">Choose Difficulty</h1>
    </div>
    
    <div class="flex flex-col art-body rounded-b-lg dark-theme bg-zinc-50 dark:bg-zinc-900 text-center p-4 gap-1 w-96">
      <label @click="$emit('handleEmits',item)" 
        class="hover:shadow-lg hover:cursor-pointer rounded-md shadow p-2" 
        v-for="(item,index) in ['Easy','Medium','Hard']">
        {{item}}
      </label>
      <button @click="$emit('handleNone',false)" class="btn hover:bg-neutral-700 p-2">Back</button>
    </div>
  </article>
</template>

<script setup>
  
</script>