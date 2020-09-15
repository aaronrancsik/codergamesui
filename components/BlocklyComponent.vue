<template>
  <div style="min-height: calc(100vh - 150px); max-height: 100%">
    <div id="blockly2">
      <div ref="blocklyDiv" class="blocklyDiv"></div>
      <xml ref="blocklyToolbox" style="display: none">
        <slot></slot>
      </xml>
    </div>
  </div>
</template>

<script>
import 'blockly/msg/hu'
import Blockly from 'blockly'
import BlocklyJS from 'blockly/javascript'
import * as Hu from 'blockly/msg/hu'

export default {
  name: 'BlocklyComponent',
  props: {
    options: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      workspace: null,
    }
  },
  mounted() {
    Blockly.setLocale(Hu)
    const options = this.$props.options || {}
    if (!options.toolbox) {
      options.toolbox = this.$refs.blocklyToolbox
    }
    this.workspace = Blockly.inject(this.$refs.blocklyDiv, options)
    this.workspace.addChangeListener(this.updateCurrentCode)
  },
  methods: {
    updateCurrentCode() {
      const c = BlocklyJS.workspaceToCode(this.workspace)
      this.$store.dispatch('code/updateCurrentCode', c)
    },
  },
}
</script>

<style scoped>
.blocklyDiv {
  height: 100%;
  width: 100%;
  text-align: left;
}
#blockly2 {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
