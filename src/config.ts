export const config = {
  tileSize: 32,
  gridWidth: 20,
  gridHeight: 15,
  roundScale: true,
  minScale: 0.5,
  drawBodies: false,
  drawView: true,
  keys: {
    'up': 38,
    'right': 39,
    'down': 40,
    'left': 37,
    'action': 32,
    'confirm': 13
  },
  entities: {
    player: {
      speed: 2,
      size: 24,
      hackDistance: 20,
      hackSpeed: 10
    },
    ranged: {
      radius: 32 * 5,
      size: 32,
      shootDelay: 1000,
      shootCooldown: 20,
      hackMeter: 50
    },
    melee: {
      size: 30,
      maxWalkDistance: 32 * 4,
    },
    energyBall: {
      size: 20,
      speed: 2,
      damage: 10
    }
  }
};
