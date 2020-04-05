class Brick {
  constructor(game, position) {
    this.image = document.getElementById('gameBrick');
    this.position = position;
    this.width = this.image.naturalWidth;
    this.height = this.image.naturalHeight;
    this.game = game;
    this.markedForDelete = false;
  }
  draw(context) {
    context.drawImage(this.image, this.position.x , this.position.y);
  }
  update(deltaTime) {
    if(detectCollision(this.game.gameBall, this)) {
      this.game.gameBall.speed.y = -this.game.gameBall.speed.y;
      this.markedForDelete = true;
    }
  }
}