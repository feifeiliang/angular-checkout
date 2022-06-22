import { Component, Input } from '@angular/core';

@Component({
  selector: 'checkout',
  template: `<h1>Checkout!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class CheckoutComponent {
  @Input() name: string;
}
