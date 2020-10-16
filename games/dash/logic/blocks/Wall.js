import Block from '@/games/dash/logic/blocks/Block'

export default class Wall extends Block {
  constructor(position) {
    super(false, false, position)
  }
}
