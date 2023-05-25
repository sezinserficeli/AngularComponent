import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div
    class="alert alert-success"
    [ngClass]="{ fadeOut: displayNotification }"
  >
    <p>this website uses cookies</p>
    <div class="close">
      <button class="btn" (click)="closeNotification()">X</button>
      <div></div>
    </div>
  </div>`,
  styles: [
    '.notification-div{margin: 10px 0; padding: 10px 20px; background: #fad7a0; text-align: center;}',
    'p{font-size: 14px;}',
    '.close{float: right;margin-top: -40px; margin-right: -5px;}',
    '.fadeOut {visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}',
  ],
})
export class NotificationComponent {
  closeNotification() {
    this.displayNotification = true;
  }
  displayNotification: boolean = false;
}
