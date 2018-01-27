import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  describe("Left operand", () => {
    const FIRST_PATTERN = 1;
    describe("First pattern", () => {

      it("should return 1 as string value when put 1", async(() => {
        const component = TestBed.createComponent(AppComponent);
        let leftOperand = component.componentInstance.leftOperand(FIRST_PATTERN, 1);
        expect(leftOperand).toEqual("1");
      }));

      it("should return 5 as string value when put 5", async(() => {
        const component = TestBed.createComponent(AppComponent);
        let leftOperand = component.componentInstance.leftOperand(FIRST_PATTERN, 5);
        expect(leftOperand).toEqual("5");
      }));


    });

    describe("Secound pattern", () => {

      it("should return One when put 1", () => {
        const component = TestBed.createComponent(AppComponent);

        let leftOperand = component.componentInstance.leftOperand(2, 1);

        expect(leftOperand).toEqual("one");
      });

    });

  });

  describe("Right operand", () => {
    const FIRST_PATTERN = 1;

    describe("Frist pattern", () => {
      it("should return one when put 1", async(() => {
        const component = TestBed.createComponent(AppComponent);
        let rightOperand = component.componentInstance.rightOperand(FIRST_PATTERN, 1)
        expect(rightOperand).toEqual("one");
      }));

      it("should return two when put 2", async(() => {
        const component = TestBed.createComponent(AppComponent);
        let rightOperand = component.componentInstance.rightOperand(FIRST_PATTERN, 2);
        expect(rightOperand).toEqual("two")
      }));
    });
  });

  describe("Operand", () => {
    it("should return plush when put 1", () => {
      const component = TestBed.createComponent(AppComponent);

      let operand = component.componentInstance.operand(1);
      expect(operand).toEqual("+");
    });

    it("should return multiply when put 2", () => {
      const component = TestBed.createComponent(AppComponent);

      let operand = component.componentInstance.operand(2);
      expect(operand).toEqual("*");
    });
  });

  describe("Captcha", () => {
    it("shouod return 1 + one when put 1,1,1,1", () => {
      const component = TestBed.createComponent(AppComponent);
      let captcha = component.componentInstance.captcha(1, 1, 1, 1);
      expect(captcha).toEqual("1+one");
    });

  });


  describe("To String value", () => {

    it("should return 1 as string value when put 1 as number", async(() => {
      const component = TestBed.createComponent(AppComponent);

      let leftOperand = component.componentInstance.toStringValue(1);

      expect(leftOperand).toEqual("1");
    }));

    it("should return 2 as string value when put 2 as number", async(() => {
      const component = TestBed.createComponent(AppComponent);

      let leftOperand = component.componentInstance.toStringValue(2);

      expect(leftOperand).toEqual("2");
    }));

    it("should return 7 as string value when put 7 as number", async(() => {
      const component = TestBed.createComponent(AppComponent);

      let leftOperand = component.componentInstance.toStringValue(7);

      expect(leftOperand).toEqual("7");
    }));

  });

});
