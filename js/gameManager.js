class GameManager {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }
  startGame() {
    this.gameState = gameStates.Running;
    this.playerPaddle = new PlayerPaddle(this);
    this.playerPaddle.draw(context);
    this.inputHandler = new InputHandler(this.playerPaddle, this);
    this.gameBall = new Ball(this);
    let bricks = buildLevel(this, level1);
    this.gameObjects = [this.playerPaddle, this.gameBall, ...bricks];
  }
  update(deltaTime) {
    if(this.gameState === gameStates.Paused) {
      return;
    }
    this.gameObjects.forEach((gameObject) => gameObject.update(deltaTime));
    this.gameObjects = this.gameObjects.filter(object => !object.markedForDelete);
  }
  draw(context) {
    this.gameObjects.forEach((gameObject) => gameObject.draw(context));
    if(this.gameState === gameStates.Paused){
      context.rect(0, 0, this.gameWidth, this.gameHeight);
      context.fillStyle = "rgba(0, 0, 0, 0.5)";
      context.fill();
      context.font = "13px Arial";
      context.fillStyle = '#FFFFFF';
      context.textAlign = "center";
      context.fillText("Paused", this.gameWidth /2, this.gameHeight / 2);
    }
  }
  togglePause() {
    if(this.gameState === gameStates.Paused) {
      this.gameState = gameStates.Running;
    } else {
      this.gameState = gameStates.Paused;
    }
  }
}