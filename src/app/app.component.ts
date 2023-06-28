import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Property Binding';
  name = "Peter"

  disable = false

  getDisable(val:any)
  {
    this.disable = val
  }
}
