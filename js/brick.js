class Brick {
  constructor(game, position) {
    this.image = document.getElementById('gameBrick');
    this.position = position;
    this.width = this.image.naturalWidth;
    this.height = this.image.naturalHeight;
    this.game = game;
  }
  draw(context) {
    context.drawImage(this.image, this.position.x , this.position.y);
  }
  update(deltaTime) {

  }
}