// PseudoCode
/*
1. User clicks on buttons and for every button pressed, it gets added in the result area. 
2. user can press equal sign and do the math and it logs the answer in the result area instead of the previous numbers.
3.display will reset to 0 once reset is pressed.
*/

class Calculator {
  constructor(previousInputTextElement, currentInputTextElement){
    this.previousInputTextElement = previousInputTextElement
    this.currentInputTextElement = currentInputTextElement
    this.clear()
  }

  clear(){
    this.currentInput = ''
    this.previousInput = ''
    this.operation = undefined
  }

  delete(){

  }

  appendNumber(number){
    if(number === '.' && this.currentInput.includes('.')){
      return
    }
    if(this.currentInput.length > 14){
      return
    }
    this.currentInput = this.currentInput.toString() + number.toString()
  }

  chooseOperation(operation){
    this.operation = operation
    this.previousInput = this.currentInput
    this.currentInput = ''
  }

  compute(){
    
  }

  updateDisplay(){
    this.currentInputTextElement.innerText = this.currentInput
    this.previousInputTextElement.innerText = this.previousInput
  }
}
// DOM Functions
const numberButtons = document.querySelectorAll('[data-number') 
const operationButtons = document.querySelectorAll('[data-operation') 
const equalButton = document.querySelector('[data-equal')
const deleteButton = document.querySelector('[data-delete')
const clearButton = document.querySelector('[data-all-clear')
const previousInputTextElement = document.querySelector('[data-previous-input')
const currentInputTextElement = document.querySelector('[data-current-input')


// Input Variables

const calculator = new Calculator(previousInputTextElement, currentInputTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})