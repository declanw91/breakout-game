class PlayerPaddle {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.width = 50;
    this.height = 5;
    this.maxSpeed = 5;
    this.speed = 0;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 5
    };
  }
  draw(context) {
    context.fillStyle ='#FF0000';
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update(deltaTime) {
    if(!deltaTime) { return; }
    this.position.x += this.speed;
    if(this.position.x < 0) {
      this.position.x = 0;
    }
    if(this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }
  moveLeft() {
    this.speed = -this.maxSpeed;
  }
  moveRight() {
    this.speed = this.maxSpeed;
  }
  stop() {
    this.speed = 0;
  }
}