<template>
  <div>
    <v-row justify="center" no-gutters>
      <v-btn small outlined class="my-1 mx-2 font-weight-black" color="info">
        <v-icon>save</v-icon>
      </v-btn>
      <v-btn small outlined class="my-1 mx-2 font-weight-black" color="success">
        <v-icon>play_arrow</v-icon>
      </v-btn>
      <v-btn small outlined class="my-1 mx-2 font-weight-black" color="error">
        <v-icon>stop</v-icon>
      </v-btn>
    </v-row>
    <div id="bc" style="min-height: calc(100vh - 61px); max-height: 100%">
      <div id="blockly2">
        <div ref="blocklyDiv" class="blocklyDiv"></div>
        <xml ref="blocklyToolbox" style="display: none">
          <slot></slot>
        </xml>
      </div>
    </div>
  </div>
</template>

<script>
import Blockly from 'blockly'
import BlocklyJS from 'blockly/javascript'
import * as Hu from 'blockly/msg/hu'

export default {
  name: 'BlocklyComponent',
  model: {
    prop: 'code',
    event: 'update',
  },
  props: {
    code: {
      type: String,
      default: '',
    },
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
    Blockly.Blocks.iterations = {
      init: () => {
        this.appendDummyInput().appendField('Lépések')
        this.appendStatementInput('iterationsin').setCheck(null)
        this.setColour(0)
        this.setTooltip('')
        this.setHelpUrl('')
      },
    }
    Blockly.JavaScript.iterations = (block) => {
      block.setDeletable(false)
      const iterationsin = Blockly.JavaScript.statementToCode(
        block,
        'iterationsin'
      )
      // TODO: Assemble JavaScript into code variable.
      const code = iterationsin
      return code
    }

    Blockly.Blocks.stepforward = {
      init: () => {
        this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField('Fel lépés ⬆')
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour(33)
        this.setTooltip('')
        this.setHelpUrl('')
      },
    }
    Blockly.JavaScript.stepforward = (block) => {
      // TODO: Assemble JavaScript into code variable.
      const code = 'StepForward();\n'
      return code
    }

    Blockly.Blocks.stepback = {
      init: () => {
        this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField('Le lépés ⬇')
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour(33)
        this.setTooltip('')
        this.setHelpUrl('')
      },
    }
    Blockly.JavaScript.stepback = (block) => {
      // TODO: Assemble JavaScript into code variable.
      const code = 'StepBack();\n'
      return code
    }

    Blockly.Blocks.turnright = {
      init: () => {
        this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField('Jobbra Lépés ↩ ')
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour(200)
        this.setTooltip('')
        this.setHelpUrl('')
      },
    }
    Blockly.JavaScript.turnright = (block) => {
      // TODO: Assemble JavaScript into code variable.
      const code = 'TurnRight();\n'
      return code
    }

    Blockly.Blocks.turnleft = {
      init: () => {
        this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField('Balra lépés ↪')
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour(200)
        this.setTooltip('')
        this.setHelpUrl('')
      },
    }
    Blockly.JavaScript.turnleft = (block) => {
      // TODO: Assemble JavaScript into code variable.
      const code = 'TurnLeft();\n'
      return code
    }
  },

  methods: {
    showCode() {
      this.code = this.$store.state.code.currentCode
    },
    doing() {
      // eslint-disable-next-line no-console
      console.log('yay')
    },
    updateCurrentCode() {
      const c = BlocklyJS.workspaceToCode(this.workspace)
      // this.$store.dispatch('code/updateCurrentCode', c)
      this.$store.commit('code/updateCurrentCode', c)
      this.$emit('update', c)
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
  bottom: 1;
  width: 100%;
  height: calc(100% - 36px);
}
</style>
