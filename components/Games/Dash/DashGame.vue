<template>
  <section>
    <div class="screen">
      <PhaserGame v-if="createGame" id="phaserDash" :create-game="createGame" />
    </div>
  </section>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import PhaserGame from 'nuxtjs-phaser/dist/phaserGame.vue'

const getGame = async (config = {}) => {
  const { default: createGame } = await import('~/games/dash/main')
  return createGame
}

const setPhaserFocus = () => {
  const phaser = document.getElementById('phaserDash')
  if (phaser) phaser.focus()
}

export default {
  name: 'DashGameComponent',
  components: { PhaserGame },
  data() {
    return {
      createGame: undefined,
    }
  },
  async mounted() {
    this.createGame = await getGame()
    this.$nextTick(() => setPhaserFocus())
  },
  methods: {
    emitPhaserEvent(eventName) {
      this.$phaser.eventEmitter.emit(eventName, 'default')
    },
    // jump() {
    //   this.emitPhaserEvent('jump')
    // },
    // walkLeft() {
    //   this.emitPhaserEvent('walkLeft')
    // },
    // walkRight() {
    //   this.emitPhaserEvent('walkRight')
    // },
    // pause() {
    //   this.emitPhaserEvent('pause')
    // },
    // resume() {
    //   this.emitPhaserEvent('resume')
    // },
  },
}
</script>

<style scoped>
.screen {
  height: calc(100vh - 25px);
}
</style>
