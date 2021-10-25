import { Component, OnInit } from '@angular/core';
import { MusicModel } from './models/musicmodel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newAlbum = {album: "", artist:"", imgCover:""};
  
  musicList: MusicModel[] = [];

  ngOnInit(){
this.musicList=[
  {album:'Marmur',artist:'Taco Hemigway', imgCover:'https://ecsmedia.pl/c/marmur-b-iext67990735.jpg'},
  {album:'Incepcja',artist:'Hans Zimmer', imgCover:'https://images-na.ssl-images-amazon.com/images/I/81CgNB2mglL._SL1425_.jpg'},
  {album:'Oxygene',artist:'Jean Michel Jarre', imgCover:'https://ecsmedia.pl/c/oxygene-w-iext43242948.jpg'},
  {album:'Avatar',artist:'Hans Zimmer', imgCover:'https://img.discogs.com/6R6xKUTx9eNFCg0Owux5f8yHeB4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2092135-1263555536.jpeg.jpg'},
  {album:'Magnetic fields',artist:'Jean Michel Jarre', imgCover:'https://image.ceneostatic.pl/data/products/30282638/i-jean-michel-jarre-les-chants-magn-tiques-magnetic-fields-cd.jpg'},
  {album:'Italia',artist:'Chris Botti', imgCover:'https://ecsmedia.pl/c/italia-pl-w-iext71514867.jpg'},
]
  }

  add(){
 
   if(this.newAlbum.artist.length !==0  && this.newAlbum.album.length !== 0 && this.newAlbum.imgCover.length !== 0 ){
    this.musicList.push(this.newAlbum);
    this.newAlbum = {album: "", artist:"", imgCover:""};
    } else return alert ('Uzupełnij pola!');
  }

  information(){
    console.log("Album:Myszka Miki i przyjaciele");
  }
}
