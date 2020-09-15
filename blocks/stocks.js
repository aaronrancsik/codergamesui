import * as Blockly from 'blockly/core'
// eslint-disable-next-line
import BlocklyJS from 'blockly/javascript'

Blockly.Blocks.stock_buy_simple = {
  init() {
    this.appendValueInput('Number')
      .setCheck('Number')
      .appendField('Buy Stock ID')
      .appendField(new Blockly.FieldNumber(0), 'ID')
      .appendField('For amount')
      .appendField(new Blockly.FieldNumber(0), 'Amount')
      .appendField('At Price')
      .appendField(new Blockly.FieldNumber(0), 'Price')
    this.setPreviousStatement(true, null)
    this.setNextStatement(true, 'String')
    this.setColour(230)
    this.setTooltip('buy id')
    this.setHelpUrl('https://example.com')
  },
}

Blockly.JavaScript.stock_buy_simple = function (block) {
  const numberId = block.getFieldValue('ID')
  const numberAmmount = block.getFieldValue('Amount')
  const numberPrice = block.getFieldValue('Price')
  const valueNumber = Blockly.JavaScript.valueToCode(
    block,
    'Number',
    Blockly.JavaScript.ORDER_ATOMIC
  )
  const code = `buy(${numberId},${numberAmmount},${numberPrice},${valueNumber});\n`
  return code
}

Blockly.Blocks.stock_buy_prog = {
  init() {
    this.appendValueInput('Number')
      .setCheck('Number')
      .appendField('Buy Stock ID')
    this.appendValueInput('NAME').setCheck('Number').appendField('For amount')
    this.appendValueInput('NAME').setCheck('Number').appendField('At Price')
    this.setPreviousStatement(true, null)
    this.setNextStatement(true, 'String')
    this.setColour(230)
    this.setTooltip('buy id')
    this.setHelpUrl('https://example.com')
  },
}

Blockly.JavaScript.stock_buy_prog = function (block) {
  const valueNumber = Blockly.JavaScript.valueToCode(
    block,
    'Number',
    Blockly.JavaScript.ORDER_ATOMIC
  )
  const valueName = Blockly.JavaScript.valueToCode(
    block,
    'NAME',
    Blockly.JavaScript.ORDER_ATOMIC
  )
  const code = `buy(${valueNumber},${valueName},${valueName});\n`
  return code
}

Blockly.Blocks.stock_fetch_price = {
  init() {
    this.appendValueInput('Fetch')
      .setCheck('Number')
      .appendField('Fetch Price of Stock ID:')
    this.appendDummyInput()
      .appendField('And set to:')
      .appendField(new Blockly.FieldVariable('item'), 'variable')
    this.setInputsInline(true)
    this.setPreviousStatement(true, null)
    this.setNextStatement(true, null)
    this.setColour(230)
    this.setTooltip('fetch stock price')
    this.setHelpUrl('https://example.com')
  },
}

Blockly.JavaScript.stock_fetch_price = function (block) {
  const valueFetch = Blockly.JavaScript.valueToCode(
    block,
    'Fetch',
    Blockly.JavaScript.ORDER_ATOMIC
  )
  const variableVariable = Blockly.JavaScript.variableDB_.getName(
    block.getFieldValue('variable'),
    Blockly.Variables.NAME_TYPE
  )
  const code = `fetch_price(${valueFetch},${variableVariable});\n`
  return code
}
