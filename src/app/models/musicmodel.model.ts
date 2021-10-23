export class MusicModel{
    public album:string;
    public artist:string;
    public imgCover:string;

    constructor(album:string, artist:string, imgCover:string,){
        this.album = album;
        this.artist = artist;
        this.imgCover = imgCover;
    }
}