<template>
  <main class='pr-4 md:pr-6 space-y-8 scroll-smooth snap-y'>
    <article class="space-y-2 relative my-4 md:my-0 snap-center" v-if="!collBoos.menuBoo">
      <gameBoard :collBoos="collBoos" :bot="bot"/>
    </article>
    
    <article v-if="collBoos.menuBoo" class="flex md:block">
      <gameMenu/>
    </article>
    
    <article v-if="collBoos.menuBoo" class="snap-center">
      <div class="art-head p-2 px-4 dark-theme">
        <h3 class="">Rules:</h3>
      </div>
      
      <div  class="art-body p-3 dark-theme">
        <ol class="list-disc px-10">
          <li>The game is played on a grid that's 3 squares by 3 squares.</li>
          <li>One player is X, and the other player is O. Players take turns putting their marks in empty squares.</li>
          <li>The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.</li>
          <li>If all 9 squares are full and no player has 3 marks in a row, the game ends in a draw.</li>
        </ol>
       
      </div>
    </article>
    <article v-if="collBoos.menuBoo" class="snap-center">
      <div class="art-head p-2 px-4 dark-theme">
        <h3>Game Modes</h3>
      </div>
      <div class="art-body p-3 dark-theme">
        <ul class="list-disc px-10">
          <li><strong>1v1:</strong> Two players take turns playing against each other.</li>
          <li><strong>Bot:</strong> Play against a bot with three levels of difficulty:
            <ul class="list-decimal ml-8">
              <li><strong>Easy:</strong> The bot picks random spots.</li>
              <li><strong>Medium:</strong> The bot blocks winning moves and tries to win.</li>
              <li><strong>Hard:</strong> The bot plays optimally, ensuring a draw or a win for itself.</li>
            </ul>
          </li>
        </ul>
      </div>
    </article>
  </main>

</template>

<script setup>
  import gameMenu from '../components/gameMenu.vue';
  import gameBoard from '../components/gameBoard.vue';
  import state from '../composables/states.js'
  const {collBoos,bot} = state;
</script>

