export class MusicModel{
    public album:string;
    public artist:string;
    public imgCover:string;
    public x?:string;

    constructor(album:string, artist:string, imgCover:string, x?:string){
        this.album = album;
        this.artist = artist;
        this.imgCover = imgCover;
        this.x = x;
    }
}