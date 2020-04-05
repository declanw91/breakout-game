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
    let bricks = [];
    for (var i = 0; i < 10; i++) {
      let brick = new Brick(this);
      let brickPosition = {x: i * brick.width, y: 30};
      brick.position = brickPosition;
      bricks.push(brick);
    }
    this.gameObjects = [this.playerPaddle, this.gameBall, ...bricks];
  }
  update(deltaTime) {
    this.gameObjects.forEach((gameObject) => gameObject.update(deltaTime));
  }
  draw(context) {
    this.gameObjects.forEach((gameObject) => gameObject.draw(context));
  }
}