import Phaser from 'phaser'

const atlas = require('~/assets/games/dash/atlas_v1.png')
const level1 = require('~/assets/games/dash/level1.json')
export default class GameFieldScene extends Phaser.Scene {
  init() {}

  constructor() {
    super('game-filed-scene')
  }

  preload() {
    this.load.image('atlas', atlas)
    this.load.tilemapTiledJSON('tilemap', level1)
  }

  create() {
    const map = this.make.tilemap({ key: 'tilemap' })
    const tileset = map.addTilesetImage('atlas_v1', 'atlas')

    map.createStaticLayer('Dirt', tileset)
    map.createStaticLayer('Ememies', tileset)
    map.createStaticLayer('Walls', tileset)
    map.createStaticLayer('Boulders', tileset)
    map.createStaticLayer('Finish', tileset)
    map.createStaticLayer('Diamonds', tileset)
    map.createStaticLayer('Titanium', tileset)
    map.createStaticLayer('Player', tileset)
  }

  update(t, dt) {}
}
