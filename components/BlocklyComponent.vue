<template>
  <div>
    <v-row justify="center" no-gutters>
      <v-btn
        small
        outlined
        class="my-1 mx-2 font-weight-black"
        color="info"
        @click="updateCurrentCode"
      >
        <v-icon>save</v-icon>
      </v-btn>
      <v-btn
        small
        outlined
        class="my-1 mx-2 font-weight-black"
        color="success"
        @click="runCode"
      >
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
import Interpreter  from 'js-interpreter';

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
      // eslint-disable-next-line
      init: function () {
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
      // eslint-disable-next-line
      init: function () {
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
      // eslint-disable-next-line
      init: function () {
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
      // eslint-disable-next-line
      init: function () {
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
      init: function () {
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
    run(){
      this.isCancel = false;
      let highlightBlock= (id)=>{
          this.workspace.highlightBlock(id);
      }
      let StepForward=()=>{
          move =true;
          // this.$nuxt.$emit('STEP_FORWARD',()=>{
          //     move =false;
          //     uresJaras();
          // });
          console.log("player.stepForward()");
      }
      let StepBack=()=>{
          move =true;
          // this.$nuxt.$emit('STEP_BACK',()=>{
          //     move =false;
          //     uresJaras();
          // });
          console.log("player.stepBack()");
      }
      let TurnLeft=()=>{
          move =true;
          // this.$nuxt.$emit('TURN_LEFT',()=>{
          //     move =false;
          //     uresJaras();
          // });
          console.log("player.rotLeft()");
      }
      let TurnRight=()=>{
          // move =true;
          // this.$nuxt.$emit('TURN_RIGHT',()=>{
          //     move =false;
          //     uresJaras();
          // });/my
          console.log("player.rotRight()");
      }
      var initApi = function(myInterpreter, scope){
        let wrapper;
          wrapper = function() {
              return StepForward();
          };
          myInterpreter.setProperty(scope, 'StepForward',
          myInterpreter.createNativeFunction(wrapper));

          wrapper = function() {
              return StepBack();
          };
          myInterpreter.setProperty(scope, 'StepBack',
          myInterpreter.createNativeFunction(wrapper));

          wrapper = function() {
              return TurnLeft();
          };
          myInterpreter.setProperty(scope, 'TurnLeft',
          myInterpreter.createNativeFunction(wrapper));

          wrapper = function() {
              return TurnRight();
          };
          myInterpreter.setProperty(scope, 'TurnRight',
          myInterpreter.createNativeFunction(wrapper));

          //highlightBlock
          wrapper = function(text) {
              return highlightBlock(text);
          };
          myInterpreter.setProperty(scope, 'highlightBlock',
          myInterpreter.createNativeFunction(wrapper));

      }
      //console.log(this.code);
      var myCode = this.code;
      var myInterpreter = new Interpreter(myCode, initApi)

      let move =false;

      // let db = 1000000;
      let db = 10000;
      let uresJaras = ()=>{
          try{
              while(myInterpreter.step() && !move && !this.isCancel && db > 0){
                  db--;
                  if(db == 0){
                      alert("Végtelen ciklust, vagy túlsok számolást csináltál! :)")
                  }
              }
          }catch(e){
              alert(e);
              this.isCancel = true;
          }
      };
      uresJaras();
    },
    runCode() {
      var highlightBlock= (id)=>{
          this.workspace.highlightBlock(id);
      }
      let StepForward=(id)=>{
          move =true;
          // this.$nuxt.$emit('STEP_FORWARD',()=>{
          //     move =false;
          //     uresJaras();
          // });
          this.highlightBlock(id);
          console.log("player.stepForward()");
      }
      let StepBack=(id)=>{
          move =true;
          // this.$nuxt.$emit('STEP_BACK',()=>{
          //     move =false;
          //     uresJaras();
          // });
          this.highlightBlock(id);
          console.log("player.stepBack()");
      }
      let TurnLeft=(id)=>{
          move =true;
          // this.$nuxt.$emit('TURN_LEFT',()=>{
          //     move =false;
          //     uresJaras();
          // });
          this.highlightBlock(id);
          console.log("player.rotLeft()");
      }
      let TurnRight=(id)=>{
          // move =true;
          // this.$nuxt.$emit('TURN_RIGHT',()=>{
          //     move =false;
          //     uresJaras();
          // });/my
          this.highlightBlock(id);
          console.log("player.rotRight()");
      }
      var initApi = function(myInterpreter, scope){
        let wrapper;
          wrapper = function(id) {
              return StepForward(id);
          };
          myInterpreter.setProperty(scope, 'StepForward',
          myInterpreter.createNativeFunction(wrapper));

          wrapper = function(id) {
              return StepBack(id);
          };
          myInterpreter.setProperty(scope, 'StepBack',
          myInterpreter.createNativeFunction(wrapper));

          wrapper = function(id) {
              return TurnLeft(id);
          };
          myInterpreter.setProperty(scope, 'TurnLeft',
          myInterpreter.createNativeFunction(wrapper));

          wrapper = function(id) {
              return TurnRight(id);
          };
          myInterpreter.setProperty(scope, 'TurnRight',
          myInterpreter.createNativeFunction(wrapper));

          //highlightBlock
          wrapper = function(text) {
              return highlightBlock(text);
          };
          myInterpreter.setProperty(scope, 'highlightBlock',
          myInterpreter.createNativeFunction(wrapper));

      }
      let myCode = this.$store.state.code.currentCode;
      let move =false;
      var myInterpreter = new Interpreter(myCode, initApi)
      console.log(myCode);

        // First statement of this code.
        // Clear the program output.
        // runButton.disabled = 'disabled';

        // And then show generated code in an alert.
        // In a timeout to allow the outputArea.value to reset first.
        setTimeout(function() {
          alert('Ready to execute the following code\n' +
            '===================================\n' +
            myCode);

          // Begin execution
          let runner = function() {
            if (myInterpreter) {
              var hasMore = myInterpreter.step();
              if (hasMore) {
                // Execution is currently blocked by some async call.
                // Try again later.
                setTimeout(runner, 10);
              } else {
                // Program is complete.
                // resetInterpreter();
              }
            }
          };
          runner();
        }, 1);
        return;
    },
    highlightBlock(id) {
      this.workspace.highlightBlock(id);
    },
    resetInterpreter() {
      myInterpreter = null;
      if (runner) {
        clearTimeout(runner);
        runner = null;
      }
    },
    showCode() {
      this.code = this.$store.state.code.currentCode
      // eslint-disable-next-line no-console
      console.log(this.code)
    },
    doing() {
      // eslint-disable-next-line no-console
      console.log('yay')
    },
    updateCurrentCode() {
      // Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
      // Blockly.JavaScript.addReservedWords('highlightBlock');
      const c = BlocklyJS.workspaceToCode(this.workspace)
      // this.$store.dispatch('code/updateCurrentCode', c)
      this.$store.commit('code/updateCurrentCode', c)
    },
    playCode() {
      // eslint-disable-next-line no-console
    },
  },
}
</script>

<style scoped>
.blocklyDiv {
  height: 100%;
  width: 100%;
}
#blockly2 {
  position: absolute;
  left: 0;
  bottom: 1;
  width: 100%;
  height: calc(100% - 36px);
}
</style>
