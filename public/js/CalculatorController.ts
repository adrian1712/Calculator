namespace App {
  export class CalculatorController {
    static $inject = [];
    public title;
    public display;
    public num1;
    public num2;
    public operation;
    public answer;

    constructor () {
      this.title = 'Calculator page';
      this.display = '';
      this.num1 = '';
      this.num2 = '';
      this.operation = '';
      this.answer = '';
    }
    public setNumber(numValue) {
      if (this.num1 == ""){
        this.num1 = numValue;
      }
      else {
        this.num2 = numValue;
      }
      this.display = this.num1 + this.operation + this.num2
    }
      public useValueOf1 () {
        this.setNumber (1)
      }
      public useValueOf2 () {
        this.setNumber (2)
      }
      public useValueOf3 () {
        this.setNumber (3)
      }
      public useValueOf4 () {
        this.setNumber (4)
      }
      public useValueOf5 () {
        this.setNumber (5)
      }
      public useValueOf6 () {
        this.setNumber (6)
      }
      public useValueOf7 () {
        this.setNumber (7)
      }
      public useValueOf8 (){
        this.setNumber (8)
      }
      public useValueOf9 (){
        this.setNumber (9)
      }
      public useValueOf0 (){
        this.setNumber (0)
      }
      public setOperation (setOperation) {
        this.operation = setOperation;
        this.display = this.num1 + this.operation + this.num2
      }
      public useOperationOfPlus() {
        this.operation = "+";
        this.display = this.num1 + this.operation + this.num2
      }
      public useOperationOfMinus() {
        this.operation = "-";
        this.display = this.num1 + this.operation + this.num2
      }
      public useOperationOfMultiply() {
        this.operation = "*";
        this.display = this.num1 + this.operation + this.num2
      }
      public useOperationOfDiv() {
        this.operation = "/";
        this.display = this.num1 + this.operation + this.num2
      }
      public useOperationOfEqual() {
        if (this.operation == "+"){
          this.answer = this.num1 + this.num2;
        }
        else if (this.operation == "-") {
          this.answer = this.num1 - this.num2;
        }
        else if(this.operation = "*") {
          this.answer = this.num1 * this.num2;
        }
        else if(this.operation = "/") {
          this.answer = this.num1 / this.num2;
        }
        this.display = this.num1 + this.operation + this.num2 + " = " + this.answer
      }
      public useOperationOfClear() {
        this.display = ""
      }

  }
}
// public setNumber(numValue) {
//   if (this.num1 == ""){
//     this.num1 = numValue;
//   }
//   else {
//     this.num2 = numValue;
//   }
//   this.display = this.num1 + this.operation + this.num2
// }
