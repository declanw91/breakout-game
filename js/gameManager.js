class GameManager {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }
  startGame() {
    this.playerPaddle = new PlayerPaddle(this);
    this.playerPaddle.draw(context);
    this.inputHandler = new InputHandler(this.playerPaddle);
    this.gameBall = new Ball(this);
    this.gameObjects = [this.playerPaddle, this.gameBall];
  }
  update(deltaTime) {
    this.gameObjects.forEach((gameObject) => gameObject.update(deltaTime));
  }
  draw(context) {
    this.gameObjects.forEach((gameObject) => gameObject.draw(context));
  }
}