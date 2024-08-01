<template>
  <section class="flex justify-between text-center p-2 md:p-4 bg-neutral-100 dark:bg-zinc-800">
    <div class="text-2xl md:text-4xl kalam p-2">V-Tac</div>
    <div class="flex items-center md:text-2xl my-auto h-5 w-36 md:h-10 md:w-48 bg-zinc-100 rounded-full">
        <router-link activeClass="active-link" class="rounded-l-full nav-links " :to="'/Home'">Home</router-link>
        <router-link activeClass="active-link" class="rounded-r-full nav-links " :to="'/Game'">Game</router-link>
    </div>
    <div class="my-auto text-xl flex text-center">
        <button class="btn rounded-full text-2xl p-2  "  @click="toggleTheme()">
            <component class="w-8 md:w-10 " :is="arrIcon[theme]" />
        </button>
    </div>
  </section>
</template>

<script setup>
    import { ref,computed,Transition } from 'vue';
    import moonIcon from './icons/moonIcon.vue';
    import sunIcon from './icons/sunIcon.vue';
    import homeIcon from './icons/homeIcon.vue';
    import gameIcon from './icons/gameIcon.vue'
    const arrIcon = {light: moonIcon,dark: sunIcon}, theme = ref(localStorage.theme);
    function toggleTheme(){
        if(localStorage.theme === "dark"){
            localStorage.theme = "light";
            document.querySelector('html').classList.remove('dark')
        }else{
            localStorage.theme = "dark"
            document.querySelector('html').classList.add('dark')
        }
        theme.value = localStorage.theme;
    };
</script>
