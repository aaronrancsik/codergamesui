<template>
  <div>
    <button @click="test">test</button>
  </div>
</template>

<script>
import Interpreter from 'js-interpreter'

export default {
  props: {
    code: {
      type: String,
      require: true,
      default: '',
    },
  },
  data() {
    return {
      currentCode: this.code,
    }
  },
  methods: {
    test() {
      const myInterpreter = new Interpreter(this.code)
      myInterpreter.run()

      // eslint-disable-next-line no-console
      console.log(myInterpreter.value)
    },
  },
}
</script>
