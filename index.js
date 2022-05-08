window.addEventListener('load', init)


let time = 5;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'generate',
    'hat',
    'density',
    'purple',
    'indian',
    'freelancer',
    'lithium',
    'calendar',
    'clock',
    'equities',
    'messsage',
    'suburban',
    'assuming',
    'obstinance',
    'play',
    'pazazz',
    'murder',
    'fun',
    'scandal',
    'unique',
    'tommorrow',
    'yesterday',
    'time',
    'hero',
    'establishment',
    'revolver',
    'laughter',
    'space',
    'javascript',
    'joke',
    'runway'
];



// initialize game

function init() {
    // load word from array
    showWord(words);
}

// pick and show random word
function showWord(words) {
    // generate random array index
    const randomIndex = Math.floor(Math.random() * words.length);
    // output current word
    currentWord.innerHTML = words[randomIndex]
}