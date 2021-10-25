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
    new MusicModel('Oxygene', 'Jean Michel Jarre', 'https://ecsmedia.pl/c/oxygene-w-iext43242948.jpg'),
    new MusicModel('Avatar', 'Hans Zimmer', 'https://img.discogs.com/6R6xKUTx9eNFCg0Owux5f8yHeB4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2092135-1263555536.jpeg.jpg'),
    new MusicModel('Italia', 'Chris Botti', 'https://ecsmedia.pl/c/italia-pl-w-iext71514867.jpg'),
    new MusicModel('Magnetic fields', 'Jean Michel Jarre', 'https://image.ceneostatic.pl/data/products/30282638/i-jean-michel-jarre-les-chants-magn-tiques-magnetic-fields-cd.jpg')
  ]

}
