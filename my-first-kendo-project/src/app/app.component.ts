import { Component } from '@angular/core';
import { products } from './../product/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works Test!';
  gridData: any[] = products;
  opened: boolean = false;
  toggleText: string = "Hide";
  show: boolean = true;

  onClick() {
    this.title = "Hello from Kendo UI!";
  }

  open(status) {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  onToggle() {
    this.show = !this.show;
    this.toggleText = this.show ? "Hidе" : "Show";
  }
}
