
class Calculator {
    constructor(currentOperandText, previousOperandText){
        this.currentOperandText = currentOperandText
        this.previousOperandText = previousOperandText
        this.clear()
    }
    clear(){
        this.currentOperandText.innerHTML = ''
        this.previousOperandText.innerHTML = ''
        this.operation = undefined;
        this.currentOperand = undefined;
        this.previousOperand = undefined;
    }
    appendNumber(number){
        
        switch (this.currentOperandText.innerHTML) {
            
            case "+":
                
                this.currentOperandText.innerHTML = ""
                this.previousOperandText.innerHTML = this.previousOperandText.innerHTML + " + "
                
                break;
            case "-":
                this.currentOperandText.innerHTML = ""
                this.previousOperandText.innerHTML = this.previousOperandText.innerHTML + " - "
                break;
            case "*":
                this.currentOperandText.innerHTML = ""
                this.previousOperandText.innerHTML = this.previousOperandText.innerHTML + " * "
                break;
            case "÷":
                this.currentOperandText.innerHTML = ""
                this.previousOperandText.innerHTML = this.previousOperandText.innerHTML + " ÷ "
                break;
        
            default:
                break;
        }

        
        this.currentOperandText.innerHTML= this.currentOperandText.innerHTML + number
        this.currentOperand = parseFloat(this.currentOperandText.innerHTML)
        


        
        
    }
    addDecimal(){
        if (this.currentOperandText.innerHTML.includes(".")){
            return
        }
        
        switch (this.currentOperandText.innerHTML) {
            
            case "+":
                
                this.currentOperandText.innerHTML = ""
                this.previousOperandText.innerHTML = this.previousOperandText.innerHTML + " + "
                
                break;
            case "-":
                this.currentOperandText.innerHTML = ""
                this.previousOperandText.innerHTML = this.previousOperandText.innerHTML + " - "
                break;
            case "x":
                this.currentOperandText.innerHTML = ""
                this.previousOperandText.innerHTML = this.previousOperandText.innerHTML + " * "
                break;
            case "÷":
                this.currentOperandText.innerHTML = ""
                this.previousOperandText.innerHTML = this.previousOperandText.innerHTML + " ÷ "
                break;
        
            default:
                break;
        }
        this.currentOperandText.innerHTML = this.currentOperandText.innerHTML +"."

        console.log("hi")
    }
    displayOperation(operation){
        if (this.currentOperandText.innerHTML === "+" || this.currentOperandText.innerHTML === "-" 
        || this.currentOperandText.innerHTML === "*" || this.currentOperandText.innerHTML === "÷"){
            return
        }
        if ( this.currentOperand !==undefined & this.previousOperand !== undefined){
            this.compute()
        }
        
        this.previousOperandText.innerHTML = this.currentOperandText.innerHTML
        this.currentOperandText.innerHTML = operation
        this.operation = operation
        this.previousOperand = parseFloat(this.previousOperandText.innerHTML)
        console.log(this.previousOperand)
        console.log(this.currentOperand)
        console.log(this.operation)

        
        
        
    }
        
    compute(){
        
        if (this.currentOperandText.innerHTML !== "" & this.previousOperandText.innerHTML !== ""){
            switch (this.operation) {
                case "+":
                    this.currentOperand = this.previousOperand + this.currentOperand
                    break;
                case "-":
                    this.currentOperand = this.previousOperand - this.currentOperand
                    break;
                case "*":
                    this.currentOperand = this.previousOperand * this.currentOperand
                    break;
                case "÷":
                    this.currentOperand = this.previousOperand / this.currentOperand
                    break;
        
                default:
                    break;
            }
        }
        console.log(this.currentOperand)
        this.currentOperandText.innerHTML = this.currentOperand
        }
    percent(){
        this.currentOperand = this.currentOperand*0.01
        this.currentOperandText.innerHTML = this.currentOperand
    }
        
    plusminus(){
        if(this.currentOperandText.innerHTML.includes('-')){
            this.currentOperandText.innerHTML = this.currentOperandText.innerHTML.substring(1,this.currentOperandText.innerHTML.length)
            return
            
        }
        this.currentOperandText.innerHTML = '-'+this.currentOperandText.innerHTML
        this.currentOperand = parseFloat(this.currentOperandText.innerHTML)

        
    }
}


operation = document.querySelectorAll('[data-operation]')
numbers = document.querySelectorAll('[data-number]')
equal = document.querySelector('[data-equals]')
plusminus = document.querySelector('[data-plus-minus]')
clear = document.querySelector('[data-clear]')
percent = document.querySelector('[data-percent]')
currentOperandText = document.querySelector('[data-current-operand]')
previousOperandText  = document.querySelector('[data-previous-operand]')
decimal = document.querySelector('[data-decimal]')

calculator = new Calculator(currentOperandText, previousOperandText)

numbers.forEach(button => {
    button.addEventListener('click', hi =>{
        calculator.appendNumber(button.innerHTML)

    
    })
})  
console.log(decimal)

decimal.addEventListener('click', hi => {
    calculator.addDecimal()
})
operation.forEach(button => {
    button.addEventListener('click', hi =>{
        calculator.displayOperation(button.innerHTML)

    
    })
})  
equal.addEventListener('click',hi =>{
    this.previousOperandText.innerHTML = this.previousOperandText.innerHTML + this.currentOperandText.innerHTML 
    calculator.compute()
    
    
    
    console.log(this.currentOperandText.innerHTML)
    
} )

clear.addEventListener('click', hi=>{
    calculator.clear()
    console.log(this.operation) 
    console.log(this.currentOperand) 
    console.log(this.previousOperand)
})
percent.addEventListener('click',hi =>{
    calculator.percent();
})
plusminus.addEventListener('click', hi =>{
    calculator.plusminus()
})


