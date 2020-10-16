import Block from '@/games/dash/logic/blocks/Block'

export default class Wall extends Block {
  constructor(positon) {
    super(false, false, positon)
  }
}
