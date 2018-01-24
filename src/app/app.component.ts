import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  toStringValue = (num: number): string => {
    if (num === 1) {
      return "1"
    } else if (num === 2) {
      return "2"
    }
  }
}
