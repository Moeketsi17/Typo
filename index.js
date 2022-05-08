window.addEventListener('load', init)

// levels 
const levels = {
    easy: 7,
    medium: 5,
    hard: 3
}

// change level
const currentLevel = levels.easy


let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
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
    'message',
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
    // show number of seconds in UI
    seconds.innerHTML = currentLevel;
    // load word from array
    showWord(words);
    // matching word input
    wordInput.addEventListener('input', startMatch);
    // call countdown every secon
    setInterval(countdown, 1000);
    // check status
    setInterval(checkStatus, 50);
}

function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    // if score -1 display 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
    
}

// match currentword to wordInput'
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
            message.innerHTML = 'Correct! ! !';
            return true;
        } else {
            message.innerHTML = '';
            return false;
        }
}


// pick and show random word
function showWord(words) {
    // generate random array index
    const randomIndex = Math.floor(Math.random() * words.length);
    // output current word
    currentWord.innerHTML = words[randomIndex]
}

// countdown timer
function countdown() {
    // make sure the time is not run out
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    // show time 
    timeDisplay.innerHTML = time
}

function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game over! ! !';
        score = -1;
    }
}







