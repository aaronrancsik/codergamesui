<template>
  <div class="App">
    <v-row>
      <v-col md="12" sm="12" xs="12" class="d-flex flex-column test pa-1">
        <v-toolbar dense elevation="0">
          <v-toolbar-items>
            <v-btn class="font-weight-black" color="success"> SAVE </v-btn>
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn outlined class="font-weight-black" color="error">
              STOP
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn outlined class="font-weight-black" color="success">
              RUN
            </v-btn>
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn outlined class="font-wight-black"> View </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-col>
      <!-- <v-col xs="12" class="d-flex flex-column test pa-1">
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-btn outlined color="primary">text</v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="doing">
            <v-list-item-content>
              <v-list-item-title> Mentés</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col> -->
      <v-col xl="6" lg="6" md="12" xs="12" class="d-flex flex-column test pa-1">
        <v-card class="d-flex flex-column" outlined tile>
          <!-- <v-tabs v-model="tab">
            <v-tab key="codeEditor"> Block Editor </v-tab>
            <v-tab key="jscode"> JavaScript </v-tab>
          </v-tabs> -->
          <!-- <v-tabs-items v-model="tab">
            <v-tab-item key="codeEditor"> -->
          <BlocklyComponent ref="foo" :options="options"></BlocklyComponent>
          <!-- </v-tab-item>
            <v-tab-item key="jscode" style="min-height: calc(100vh - 150px)"> -->
          <!-- </v-tab-item>
          </v-tabs-items> -->
        </v-card>
      </v-col>
      <v-col xl="6" lg="6" md="6" sm="12" class="d-flex flex-column test pa-1">
        <v-card class="d-flex flex-column" outlined tile>
          <JavaScriptInterpreter :code="'88+5'" />
        </v-card>
      </v-col>
      <v-col xl="6" lg="6" md="6" sm="12" class="d-flex flex-column test pa-1">
        <v-card class="d-flex flex-column" outlined tile>
          <div id="code">
            <button @click="showCode()">Show JavaScript</button>
            <!-- eslint-disable-next-line -->
                <pre v-html="code"></pre>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- <BlocklyComponent id="blockly1">
      <block type="controls_ifelse"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="controls_repeat_ext">
        <value name="TIMES">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
      </block>
      <block type="logic_operation"></block>
      <block type="logic_negate"></block>
      <block type="logic_boolean"></block>
      <block type="logic_null" disabled="true"></block>
      <block type="logic_ternary"></block>
      <block type="text_charAt">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">text</field>
          </block>
        </value>
      </block>
    </BlocklyComponent> -->
  </div>
</template>

<script>
import '~/blocks/stocks'
import '~/blocks/prompt'

export default {
  name: 'App',
  data() {
    return {
      tab: null,
      code: '',
      options: {
        theme: 'dark',
        media: process.env.baseUrl + '/media/',
        grid: {
          spacing: 25,
          length: 8,
          colour: '#353535',
          snap: true,
        },
        toolbox: `<xml>
          <category name="Logic" colour="%{BKY_LOGIC_HUE}">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
          </category>
          <category name="Loops" colour="%{BKY_LOOPS_HUE}">
            <block type="controls_repeat_ext">
              <value name="TIMES">
                <block type="math_number">
                  <field name="NUM">10</field>
                </block>
              </value>
            </block>
            <block type="controls_whileUntil"></block>
          </category>
          <category name="Math" colour="%{BKY_MATH_HUE}">
            <block type="math_number">
              <field name="NUM">123</field>
            </block>
            <block type="math_arithmetic"></block>
            <block type="math_single"></block>
          </category>
          <category name="Text" colour="%{BKY_TEXTS_HUE}">
            <block type="text"></block>
            <block type="text_length"></block>
            <block type="text_print"></block>
          </category>
          <category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}">
            </category>
          <category name="Stocks" colour="%{BKY_LOOPS_HUE}">
            <block type="stock_buy_simple"></block>
            <block type="stock_buy_prog"></block>
            <block type="stock_fetch_price"></block>
          </category>
        </xml>`,
      },
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
  },
}
</script>

<style scoped>
.test {
  min-width: 320px;
}

.App {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body {
  margin: 0;
}

/* #code {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 50%;
  margin: 0;
  background-color: beige;
} */
</style>
