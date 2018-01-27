import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public FIRST_PATTERN = 1;

  toStringValue = (num: number): string => {
    return num + "";
  }

  leftOperand = (pattern: number, num: number): string => {
    if (pattern === this.FIRST_PATTERN) {
      return this.toStringValue(num);
    } else if (pattern === 2) {
      if (num === 1) {
        return "one";
      }
    }
    return "";
  }

  rightOperand = (pattern: number, num: number): string => {
    if (pattern === 1) {
      if (num === 1) {
        return "one";
      } else if (num === 2) {
        return "two";
      }
    }
  }

  operand = (operand: number): string => {
    if (operand === 1) {
      return "+";
    } else if (operand === 2) {
      return "*";
    }
    return "";
  }

  captcha = (pattern: number, leftOperand: number, operand: number, rightOperand: number): string => {
    let left = this.leftOperand(pattern, leftOperand);
    let right = this.rightOperand(pattern, rightOperand);
    let operation = this.operand(operand);
    return left + operation + right;
  }

}
