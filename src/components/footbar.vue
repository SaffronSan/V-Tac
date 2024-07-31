<template>
  <section class=" space-y-2 bg-neutral-100 dark:bg-zinc-800 ">
      <article class="p-2 text-xl md:text-3xl rounded-r-full ">
        <h1 class="">V-Tac</h1>
      </article>
      <article class='p-2 md:flex justify-between items-center '>
        <div class = " rounded-r-lg ">
            <h2 class="text-xl md:text-2xl">Contact</h2>
            <p class="text-lg md:text-xl">saffron_san@hotmail.com</p>
        </div>
        <div>
        <h2 class="text-xl md:text-2xl">Follow for More</h2>
            <div class="flex md:justify-between">
                <div class="text-lg space-2 group hover:cursor-pointer " v-for="(item,index) in iconsArr" :key='item'>
                    <a target="#" :href="item.link"><component class="w-8 md:w-12" :is='item.icon'/></a>
                    <a target="#" :href="item.link" class='opacity-0 group-hover:opacity-100 ease-in'>{{item.name}}</a>
                </div>
            </div>
        </div>
      </article>
      
  </section>
</template>

<script setup>
    import githubIcon from './icons/githubIcon.vue';
    import linkedin from './icons/linkedin.vue';

    const iconsArr = [{link:'https://github.com/SaffronSan',icon:githubIcon,name:'Github'},
                      {link:'https://www.linkedin.com/in/anish-thapa-097a21236/',icon:linkedin,name:'Linkedin'}];
</script>