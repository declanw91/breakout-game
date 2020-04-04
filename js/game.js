let canvas = document.getElementById('gameArea');
let context = canvas.getContext('2d');

let gameWidth = canvas.width;
let gameHeight = canvas.height;

let playerPaddle = new PlayerPaddle(gameWidth, gameHeight);
playerPaddle.draw(context);