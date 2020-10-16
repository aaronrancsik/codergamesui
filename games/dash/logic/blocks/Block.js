export default class Block {
  constructor(moveable, explosive, position) {
    this.moveable = moveable
    this.explosive = explosive
    this.falling = false
    this.position = position
    this.oldPosition = position
  }

  isMoveable() {
    return this.moveable
  }
}
