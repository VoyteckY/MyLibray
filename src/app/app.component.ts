import { Component } from '@angular/core';
import { MusicModel } from './models/musicmodel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  musicList: MusicModel[] = [
    new MusicModel('Marmur', 'Taco Hemigway', 'https://ecsmedia.pl/c/marmur-b-iext67990735.jpg'),
    new MusicModel('Incepcja', 'Hans Zimmer', 'https://images-na.ssl-images-amazon.com/images/I/81CgNB2mglL._SL1425_.jpg'),
    new MusicModel('Italia', 'Chris Botti', 'https://ecsmedia.pl/c/italia-pl-w-iext71514867.jpg'),
  ]

}
