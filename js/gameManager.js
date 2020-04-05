class GameManager {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gameState = gameStates.Menu;
    this.gameBall = new Ball(this);
    this.playerPaddle = new PlayerPaddle(this);
    this.inputHandler = new InputHandler(this.playerPaddle, this);
  }
  startGame() {
    if(this.gameState !== gameStates.Menu) {
      return;
    }
    let bricks = buildLevel(this, level1);
    this.gameObjects = [this.playerPaddle, this.gameBall, ...bricks];
    this.gameState = gameStates.Running;
  }
  update(deltaTime) {
    if(this.gameState != gameStates.Running) {
      return;
    }
    this.gameObjects.forEach((gameObject) => gameObject.update(deltaTime));
    this.gameObjects = this.gameObjects.filter(object => !object.markedForDelete);
  }
  draw(context) {
    if(this.gameState === gameStates.Paused){
      context.rect(0, 0, this.gameWidth, this.gameHeight);
      context.fillStyle = "rgba(0, 0, 0, 0.5)";
      context.fill();
      context.font = "13px Arial";
      context.fillStyle = '#FFFFFF';
      context.textAlign = "center";
      context.fillText("Paused", this.gameWidth /2, this.gameHeight / 2);
    } else if(this.gameState === gameStates.Menu){
      context.rect(0, 0, this.gameWidth, this.gameHeight);
      context.fillStyle = "rgba(0, 0, 0, 0.5)";
      context.fill();
      context.font = "13px Arial";
      context.fillStyle = '#FFFFFF';
      context.textAlign = "center";
      context.fillText("Press Space to Begin", this.gameWidth /2, this.gameHeight / 2);
    } else {
      this.gameObjects.forEach((gameObject) => gameObject.draw(context));
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