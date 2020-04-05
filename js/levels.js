const level1 = [
  [0,1,0,1,0,1,0,1,0,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1]
];

function buildLevel(game, level) {
  let bricks = [];
  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if(brick === 1) {
        let brick = new Brick(game);
        let brickPosition = {x: brickIndex * brick.width, y: 20 + brick.height * rowIndex};
        brick.position = brickPosition;
        bricks.push(brick);
      }
    });
  });
  return bricks;
}