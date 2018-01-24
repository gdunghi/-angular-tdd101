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

  });

});
