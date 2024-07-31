<template>
  <main class="relative space-y-6">
    <navbar class="mr-4 md:mr-6 rounded-br-3xl"/>
    <router-view class="h-full max-h-full"/>
    <footbar class='mr-4 md:mr-6 rounded-tr-3xl'/>
  </main>

</template>

<script setup>
  import navbar from './components/navbar.vue';
  import footbar from './components/footbar.vue';
  import collBoos from './composables/states.js';
  import {useRoute} from 'vue-router';
  import {ref,onMounted} from 'vue';
  const current = ref(useRoute());
  if(current.value.path.includes('home')){
    collBoos.value.menuBoo = false; 
  }
  onMounted(()=>{
    if(localStorage.getItem('theme') === null){
      localStorage.setItem('theme','light');
    }
    if (localStorage.theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  })
</script>

