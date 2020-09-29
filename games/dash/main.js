import Phaser from 'phaser'

import GameFieldScene from '@/games/dash/scenes/GameFieldScene'

const createGame = (config) =>
  new Phaser.Game({
    parent: 'phaserDash',
    type: Phaser.AUTO,
    width: 960,
    height: 1080,
    scene: [GameFieldScene],
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    ...config,
  })

export default createGame
