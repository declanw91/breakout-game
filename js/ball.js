class Ball {
  constructor() {
    this.image = document.getElementById('gameBall');
    this.speed = {x: 2, y: 2};
    this.position = {x: 10, y: 10};
  }
  draw(context) {
    context.drawImage(this.image, this.position.x , this.position.y);
  }
  update(deltaTime) {

  }
}