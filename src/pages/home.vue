<template>
  <main class="scroll-smooth">
    <section class="snap-proximity snap-y pr-4 md:pr-6 space-y-8">
      <article class="snap-center">
        <div class="hover:cursor-default flex flex-col justify-center items-center text-center p-2 space-y-8 art-head dark-theme">
          <h1 class="text-3xl md:text-7xl p-4">Simple Tic-tac-toe game made with Vue!</h1>
          <router-link class="md:text-3xl rounded-full p-4 w-48 btn" to="/game">Play</router-link>
        </div>
        
       <div class="w-full flex justify-center mx-auto p-10 art-body dark-theme">
         <img class="rounded-3xl w-[50rem] border-4 border-black" src='../images/blocks.jpg'/>
       </div>
        
      </article>
      
      <article class="snap-center">
        <div class="art-head dark-theme">
          <h2>Purpose</h2>
        </div>
        <div class="art-body dark-theme">
          <p class="px-2 text-justify ">
            This project, created in July 2024, showcases my Vue skills through a tic-tac-toe game simulation. The game features two modes: 1v1 and bots, with three bot difficulty levels: easy, medium, and hard. The easy bot picks random spots, while the medium bot strategically blocks wins. The hard bot, designed using recursion and alpha-beta pruning, ensures a draw or win for the bot. Initial optimizations reduced move times by handling the first move efficiently.
          </p>
        </div>
      </article>
    <article class="snap-center">
      <div class="art-head dark-theme">
        <h2>Resources</h2>
      </div>
      <div class="art-body grid grid-cols-1 md:grid-cols-3 gap-2 dark-theme">
        <div class="dark-theme rounded-lg p-3 bg-zinc-50 dark:bg-zinc-700 " 
          v-for="(item,index) in iconsArr" :key="index">
          <a class="flex space-x-2 hover:cursor-pointer" target="#" :href="item.doc" >
             <component class="w-8 md:w-12" :is='item.icon'/>
             <h4 class="md:text-2xl my-auto">{{item.name}}</h4>
          </a>
          <p class="text-lg hidden md:block hover:cursor-default">{{item.about}}</p>
        </div>
      </div>
    </article>
    </section>
  </main>

</template>
<script setup>
   import googlefontIcon from '../components/icons/googlefontIcon.vue';
   import tailwindIcon from '../components/icons/tailwindIcon.vue';
   import vueIcon from '../components/icons/vueIcon.vue';
   import viteIcon from '../components/icons/viteIcon.vue';
   import replitIcon from '../components/icons/replitIcon.vue';
   import circleIcon from '../components/icons/circleIcon.vue';
    const iconsArr = [
      {
        name: 'Vue',
        about: 'The majority of this project is built using Vue, a highly efficient framework for creating projects of any scale.',
        doc: 'https://vuejs.org/',
        icon: vueIcon
      },
      {
        name: 'Tailwind',
        about: 'Tailwind CSS simplifies the process of styling by providing utility-first classes, making it easier to apply consistent styles without writing complex CSS.',
        doc: 'https://tailwindcss.com/',
        icon: tailwindIcon
      },
      {
        name: 'Google Fonts',
        about: 'Google Fonts offers a vast collection of high-quality fonts for free, making it easy to enhance the typography of your projects.',
        doc: 'https://fonts.google.com/',
        icon: googlefontIcon
      },
      {
        name: 'Vite',
        about: 'Vite is a next-generation front-end build tool that is fast and efficient, making the development process smooth and rapid.',
        doc: 'https://vitejs.dev/',
        icon: viteIcon
      },
      {
        name: 'Replit',
        about: 'Replit is an online IDE that allows for collaborative coding, making it easy to develop and share code from anywhere.',
        doc: 'https://replit.com/',
        icon: replitIcon
      }, 
      {
        name: 'Icônes',
        doc:'https://icones.js.org/',
        about: 'Best place to find free icons in the internet. With lots of useful features. ',
        icon: circleIcon
      }
    ];
</script>
