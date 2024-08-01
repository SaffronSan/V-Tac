<template>
    <article class="realtive w-full">
      <div class="text-center art-head dark-theme">
        <h1 class="text-4xl md:text-7xl p-4">Chose Game Mode</h1>
      </div>
      
      <div class="relative art-body dark-theme w-full space-y-2">
        <div class="flex flex-col mx-auto space-y-2 md:w-96">
          <label class="border-b-2 border-black p-2">Player VS Bot</label>
          <div class="hover:cursor-pointer justify-center btn rounded-full p-4 flex" @click="collBoos.bot = true;">
            <label class="my-auto text-center">{{bot.name + " Mode"}}</label>
            <chevronIcon class="my-auto w-4 md:w-8" :size="20"/>
          </div>
        </div>
        
        <div class="flex flex-col mx-auto space-y-2 md:w-96">
          <label class="border-b-2 border-black p-2">Player VS Player</label>
          <button @click="collBoos.gameMode = collBoos.gameMode.includes('1v1')? '' : '1v1'" 
            :class="collBoos.gameMode.includes('1v1')? 'bg-black ' : ''"
            class="btn rounded-full text-center">1 V 1</button>
        </div>
        
        <div v-if="collBoos.bot" class="absolute items-center justify-center inset-0 mx-auto rounded-lg z-50 ">
          <gameOptions @handleNone="() =>{ collBoos.bot = false; collBoos.gameMode = ''; bot.name = 'Bot';}" 
            @handleEmits="(level) => {collBoos.bot = false; bot.name = level; collBoos.gameMode = 'Bot - ' + level;}"/>
        </div>
        <div v-if="!collBoos.valid" class="flex justify-center absolute items-center justify-center inset-0 mx-auto">
          <alert />
        </div>
        <div class="w-full flex justify-center">
          <button @click="valid()" 
            class="btn rounded-lg w-28 mx-auto dark:border-white">Play</button>
        </div>

      </div>

    </article>
</template>

<script setup>
  import gameOptions from './gameOptions.vue'
  import alert from './alert.vue';
  import chevronIcon from './icons/chevronIcon.vue';
  import state from '../composables/states.js'
  const {collBoos, bot} = state;
  
  function valid(){
    if(!collBoos.gameMode.includes('n/a')) {
      collBoos.menuBoo = false;
    } 
    else{
      collBoos.valid = false;
    }
  }
</script>