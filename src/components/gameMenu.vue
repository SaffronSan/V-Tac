<template>
    <article class="realtive w-full">
      <div class="text-center art-head dark-theme">
        <h1 class="text-4xl md:text-7xl p-4">Chose Game Mode</h1>
      </div>
      <div class="relative art-body dark-theme w-full space-y-2">
        
        <div class="flex flex-col mx-auto space-y-2 md:w-96">
          <label class="border-b-2 border-black p-2">Player VS Bot</label>
          <div class="hover:cursor-pointer justify-center btn rounded-full p-4 flex" @click="props.collBoos.bot = true;">
            <label class="my-auto text-center">{{props.bot.name + " Mode"}}</label>
            <ChevronDown class="my-auto" :size="20"/>
          </div>
        </div>
        
        <div class="flex flex-col mx-auto space-y-2 md:w-96">
          <label class="border-b-2 border-black p-2">Player VS Player</label>
          <button @click="props.collBoos.gameMode = collBoos.gameMode.includes('1v1')? '' : '1v1'" 
            :class="props.collBoos.gameMode.includes('1v1')? 'bg-black ' : ''"
            class="btn rounded-full text-center">1 V 1</button>
        </div>
        
        <div v-if="collBoos.bot" class="absolute items-center justify-center inset-0 mx-auto rounded-lg z-50 ">
          <gameOptions @handleNone="()=>{props.collBoos.bot = false; cprops.collBoos.gameMode = ''; props.bot.name = 'Bot'}" 
            @handleEmits="(level)=>{props.collBoos.bot = false; props.bot.name = level; props.collBoos.gameMode = 'Bot - ' + level}"/>
        </div>
        
        <div class="w-full flex justify-center">
          <button @click="props.collBoos.menuBoo = false;" class="btn rounded-lg w-28 mx-auto dark:border-white">Play</button>
        </div>
      </div>

    </article>
</template>

<script setup>
  import {defineProps} from 'vue';
  import gameOptions from './gameOptions.vue'
  import ChevronDown from "vue-material-design-icons/ChevronDown.vue"
  const props = defineProps(['collBoos','bot']);
  //console.log(props)
</script>