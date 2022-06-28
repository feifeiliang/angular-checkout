import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import shajs = require('sha.js');

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pAmount: number;

  constructor(private http: HttpClient) {}

  initialPayment(pAmount) {
    console.log(pAmount);
    this.http
      .post<any>('https://open-sea.alipayplus.com/aps/api/v1/payments/pay', {
        title: 'Angular POST Request Example',
      })
      .subscribe((data) => {});
  }
}
