<template>
  <section class="space-y-2 dark-theme rounded-r-3xl">
    <article class="rounded-r-3xl px-2 z-50 text-xl md:text-3xl ">
      <div class="w-full flex justify-between p-2 ">
        <div class="">
          <label>{{"Turn: " + (turn? p1.name : (collBoos.gameMode.includes("-")? bot.name: p2.name))}}</label>
        </div>
        <div>
          <label>{{"Mode: " + collBoos.gameMode}}</label>
        </div>
      </div>
      <div class="flex w-full justify-between">
        <label>{{p1.name + " : " + p1.points + " points"}}</label>
        <label>{{ (collBoos.gameMode.includes("-")? bot.name: p2.name) + " : "+ (collBoos.gameMode.includes("-")? bot.points: p2.points) + " points"}}</label>
      </div>
    </article>

    <article class="relative mx-auto w-full h-[23rem] md:w-[50rem] md:h-[50rem]">
      <div v-if="!finsher.exact.includes('n/a') && !finsher.exact.includes('tie')" 
        :class="finsher.cause" 
        class=" rounded-full bg-red-600 absolute p-2 w-full"></div>
      <div class="w-full h-full grid grid-cols-3 gap-2 p-2">
        <div v-for="(box,index) in base.board" :key="index" @click="handleBox(index);"
          class="flex justify-center items-stretch rounded text-center font-shantell text-5xl border-sky-950 border-2 md:text-9xl hover:cursor-pointer hover:shadow-md dark:border-white">
          <label :class="getItem(index).includes('blank')? 'opacity-0' : 'opacity-100'" 
            class=" transition-opacity self-center ease-in" >{{getItem(index).includes("blank")? "⠀" : getItem(index).toUpperCase()}}</label>
        </div>
      </div>
    </article>

    <article class="flex justify-between p-1 px-2 py-3">
      <div class="flex space-x-2">
        <button @click="collBoos.menuBoo = true; collBoos.gameMode = ''; boardDrive(); bot.name='Bot';" 
          class="btn hover:bg-red-600 hover:text-white hover:text-white ease-9 delay-50">Go Back</button>
        <button  @click="boardDrive()" class="btn hover:bg-green-600 hover:text-white ease-9n delay-50">Play again</button>
      </div>
     
      <button @click='p1.points = 0; p2.points = 0; bot.points=0; boardDrive();' 
        class="btn hover:bg-red-600 hover:text-white hover:text-white ease-9 delay-50"> Restart </button>
    </article>
  </section>

</template>

<script setup>
  import { ref, onMounted, watch } from "vue";
  import state from '../composables/states.js';
  //Helper functions
  let box = (index) => { return {'state': 'blank','pos' : index}}, 
    playerFac = (name,value) => {return { name : name, exact: value,points: 0 }}, 
    typeCheck = (arr,value) => arr.every((item) => item.state === value), 
    getItem = (index,s=true) => s? base.value.board[index].state :  base.value.board[index], choose = (arr) => Math.floor(Math.random()*arr.length),
    getAva = () => base.value.board.filter(i => i.state === "blank");
  //Reactive variables 
  const base = ref({board : [], taken : 0}), {p1,p2} = state, turn = ref(false),
    finsher = ref({player:'n/a',exact: "n/a", cause:""}),{collBoos,bot} = defineProps(['collBoos','bot']);
  //Bot functions
  function botExe(){
    if(bot.name.includes("Easy")){
      var ran = choose(getAva());
      base.board[getAva()[ran].pos].state = "o";
    }
    else if (bot.name.includes("Medium")) {
      if (!medBotHelp("o")) {
        if(!medBotHelp("x")){
          var ran = choose(getAva());
          base.value.board[getAva()[ran].pos].state = "o";
        }
      }
    }
    else if (bot.name.includes("Hard")) {
      if (base.value.taken === 1) {
        if (getItem(4) === "blank") {
          getItem(4,false).state = "o";
        } else {
            var ran = choose([0, 2, 6, 8]);
            base.value.board[[0, 2, 6, 8][ran]].state = "o";
        }
      } else {
        let bestMove = minimax(base.value.board, "o", -Infinity, Infinity).index;
        base.value.board[bestMove].state = "o";
      }
    }
    turn.value = true;
    base.value.taken++;
  }

  function medBotHelp(player) {
    var ava = getAva();
    for(var item of ava){
      base.value.board[item.pos].state = player;
      if(botCheck(player)) {
        if(player === "x") base.value.board[item.pos].state = "o";
        return true;
      }
      base.value.board[item.pos].state = "blank";
    }
    return false;
  }

  function botCheck(player) {
    // Define winning combinations
    const winCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    // Check all winning combinations
    return winCombos.some(combo => combo.every(index => base.value.board[index].state === player));
  }

  function minimax(newBoard, player, a, b) {
    const avaSpots = newBoard.filter(s => s.state === "blank");

    if (botCheck("x")) {
      return { score: -10 };
    } else if (botCheck("o")) {
      return { score: 10 };
    } else if (avaSpots.length === 0) {
      return { score: 0 };
    }

    const moves = [], isO = player === 'o';
    for (let i = 0; i < avaSpots.length; i++) {
      const move = {};
      move.index = avaSpots[i].pos;
      newBoard[avaSpots[i].pos].state = player;

      move.score = minimax(newBoard,(isO? 'x' : 'o'),a,b).score;
      a = isO? Math.max(a,move.score) : a;
      b = !isO? Math.min(b,move.score) : b;

      newBoard[avaSpots[i].pos].state = "blank";
      moves.push(move);
      if(b <= a) break;
    }

    let bestMove, bestScore = isO? -Infinity : Infinity;
    for(var i = 0; i < moves.length; i++){
      var score = moves[i].score;
      if((isO? score > bestScore : score < bestScore)){
        bestScore = score;
        bestMove = i;
      }
    }
    //console.log('Moves: ' + moves.map((item) => `index:${item.index},score:${item.score}`).join(' , '));
    return moves[bestMove];
  }

  //First Driver
  onMounted(()=>{
    boardDrive();
    console.log(base.value)
  })
  //Watches for base to change & if playing with a bot runs botExe
  watch(base,(newVal,oldVal)=>{
    if(!turn.value && collBoos.gameMode !== "1v1"){
      winner(p1);
      if(finsher.value.player.includes('n/a') && base.value.taken < 9) botExe();
      if(finsher.value.player.includes(p1.name)){
        return;
      }
      winner(bot);
    }
    if(newVal.taken === 9) {finsher.value.exact = "tie"; finsher.value.player = "Its a tie";}
  }, {deep:true})

  //Click event for each box
  function handleBox(index){
    if(base.value.taken < 9 && getItem(index).includes('blank') && finsher.value.player.includes('n/a')){
      base.value.board[index].state = turn.value? 'x' : 'o'; 
      turn.value = !turn.value;
      base.value.taken++;
      if(!collBoos.gameMode.includes('-')) winnerWrapper()
    }
  }
  //Starts a brand new round
  function boardDrive(){
    base.value.board = [];
    base.value.taken = 0;
    for(var i = 0; i != 9; i++){
      base.value.board.push(box(i));
    }
    finsher.value = {player:'n/a',exact: "n/a", cause:""};
    turn.value = !turn.value;
  }
  //
  function reduceCheck(arr,player,area){
    if(typeCheck(arr,player.exact)){
      finsher.value.exact = player.exact;
      finsher.value.cause = area;
      finsher.value.player = player.name + " has won from " + finsher.value.cause + "!";
      player.points += 1;
      return true;
    }
    return false;
  }

  function winnerWrapper(){
    winner(p1)
    if(finsher.value.player.includes(p1.name)){
      return;
    }
    winner(p2);
    if(finsher.value.player.includes(p2.name)){
      return;
    }
  }

  function winner(player){
    let excBoard = [{name:'horz-',arr:[],aid:true},{name:'cols-',arr:[],aid:true},{name:'dia-0',arr:[],aid:false},{name:'dia-1',arr:[],aid:false}];
    for(var i = 0; i < 3; i++){
      var m = i * 2;
      excBoard[0].arr = base.value.board.slice(i+m,i+3+m);

      for(var j = 0; j < 9; j+=3){
        excBoard[1].arr.push(base.value.board[j+i]);
      }

      for(var j = 0; j < 3; j++){
        excBoard[2].arr.push(base.value.board[j*4]);
        excBoard[3].arr.push(base.value.board[(j+1)*2]);
      }

      for(var j = 0; j < 4; j++){
        var item = excBoard[j];
        if(reduceCheck(item.arr,player,item.name + (item.aid? i : ''))){
          return;
        }
        item.arr = [];
      }
    }
    return finsher.value;
  }
</script>