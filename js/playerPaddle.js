class PlayerPaddle {
  constructor(gameWidth, gameHeight) {
    this.width = 50;
    this.height = 5;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    };
  }
  draw(context) {
    context.fillStyle ='#FF0000';
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}