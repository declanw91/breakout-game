class Ball {
  constructor(game) {
    this.image = document.getElementById('gameBall');
    this.speed = {x: 2, y: 2};
    this.position = {x: 10, y: 10};
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.size = this.image.naturalWidth;
  }
  draw(context) {
    context.drawImage(this.image, this.position.x , this.position.y);
  }
  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    if(this.position.x > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    if(this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
  }
}