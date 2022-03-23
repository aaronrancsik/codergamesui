<template>
  <div class="App">
    <v-row class="ma-0 da-0">
      <v-col cols="12" lg="6" class="pa-2 d-flex flex-column">
        <v-card elevation="24">
          <BlocklyComponent
            v-model="code"
            :options="options"
          ></BlocklyComponent>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" class="pa-2 d-flex flex-column">
        <v-card elevation="24">
          <DashGame name="hello"></DashGame>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import '~/blocks/stocks'
import '~/blocks/prompt'

export default {
  name: 'App',
  data() {
    return {
      code: '',
      options: {
        comments: false,
        collapse: false,
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 1,
          minScale: 0.7,
          scaleSpeed: 1.1,
          pinch: true,
        },
        renderer: 'thrasos',
        horizontalLayout: false,
        theme: 'dark',
        media: process.env.baseUrl + '/media/',
        grid: {
          spacing: 25,
          length: 8,
          colour: '#353535',
          snap: true,
        },
        toolboxPosition: 'end',
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
}
</script>

<style scoped>
.rel {
  position: relative;
}

.App {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
