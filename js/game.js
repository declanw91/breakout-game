let canvas = document.getElementById('gameArea');
let context = canvas.getContext('2d');

let gameWidth = canvas.width;
let gameHeight = canvas.height;

let playerPaddle = new PlayerPaddle(gameWidth, gameHeight);
playerPaddle.draw(context);

let inputHandler = new InputHandler(playerPaddle);

let lastTime = 0;

function GameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  context.clearRect(0, 0, canvas.width, canvas.height);
  playerPaddle.update(deltaTime);
  playerPaddle.draw(context);
  requestAnimationFrame(GameLoop);
}

GameLoop();