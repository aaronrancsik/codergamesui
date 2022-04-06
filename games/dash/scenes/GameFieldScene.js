import Phaser from 'phaser'

const image = require('~/assets/games/dash/atlas_v1.png')
const level1 = require('~/assets/games/dash/level2.json')
export default class GameFieldScene extends Phaser.Scene {
  init() {}

  constructor() {
    super('game-filed-scene')
    this.cursors = null
  }
  

  preload() {
    this.load.image('atlas', image)
    this.load.tilemapTiledJSON('tilemap', level1)
    this.load.spritesheet('tiles', image, {frameWidth: 32, startFrame:0 } )
    this.cursors  = this.input.keyboard.createCursorKeys()
  }

  create() {
    const map = this.make.tilemap({ key: 'tilemap' })
    const tileset = map.addTilesetImage('atlas_v1', 'atlas')

    map.createStaticLayer('Dirt', tileset)
    map.createStaticLayer('Ememies', tileset)

    const walls = map.createStaticLayer('Walls', tileset)
    walls.setCollisionByProperty({collide: true})

    map.createStaticLayer('Boulders', tileset)
    map.createStaticLayer('Finish', tileset)
    map.createStaticLayer('Diamonds', tileset)
    map.createStaticLayer('Titanium', tileset)
    // map.createStaticLayer('Player', tileset)
    
    // const debugGraphics = this.add.graphics().setAlpha(0.5)
    // walls.renderDebug(debugGraphics,{
    //     tileColor: null, 
    //     collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
    //     faceColor: new Phaser.Display.Color(40, 39, 37, 255)
    // })

    this.player = this.add.sprite(16,16, 'tiles', 5)
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('tiles', {start: 12, end: 18}),
      frameRate: 30,
      repeat: -1
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('tiles', {start: 19, end: 25}),
      frameRate: 30,
      repeat: -1
    })
    
        
    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('tiles', {start: 8, end: 9}),
      frameRate: 5,
      repeat: -1
    })


  }

  update(t, dt)
  {
    if(this.cursors)
    {

      if(this.cursors.left.isDown)
      {
        this.player.anims.play('left',true)
      }
      else if(this.cursors.right.isDown)
      {
        this.player.anims.play('right',true)
      }
      else
      {
        this.player.anims.play('idle',true)
      }
    }
  }
}
