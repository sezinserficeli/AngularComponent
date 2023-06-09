import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  slogan: string = 'Your one stop shop for everything!';

  source: string = 'https://picsum.photos/320/240';

  getSlogan() {
    return 'This is a new slogan for this web application';
  }
}
