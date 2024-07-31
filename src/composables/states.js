import { reactive } from 'vue';
let playerFac = (name,value) => {return { name : name, exact: value,points: 0 }};
const collBoos = reactive({menuBoo: true, bot: false, gameMode: ""});
const bot = reactive(playerFac("Bot",'o')), p1 = reactive(playerFac("Player 1",'x')), p2 = reactive(playerFac("Player 2",'o'))

const state = { collBoos, bot,p1,p2 };

export default state;