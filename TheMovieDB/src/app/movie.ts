
export class Movie {
    Title:string
    Rating:number
    Shortdescription:string
    Runtime:number
    Releasedate:number
    Moviethumbnail:string
 
    constructor(Title:string,
        Rating:number,
        Shortdescription:string,
        Runtime:number,
        Releasedate:number,
        Moviethumbnail:string) {
            this.Title=Title;
            this.Rating=Rating;
            this.Shortdescription=Shortdescription;
            this.Runtime=Runtime;
            this.Releasedate=Releasedate;
            this.Moviethumbnail=Moviethumbnail;
        }
  
    ngOnInit() {
    }
  
  }