# Example

```shell
$ npm install background-color-randomizer --save

```

```javascript
import { Component } from '@angular/core';
import { randomizeBgColors } from 'background-color-randomizer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';

  constructor() {
    randomizeBgColors();
  }
}

```