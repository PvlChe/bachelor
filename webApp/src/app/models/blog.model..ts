export class Blog {
    public title: string;
    public date: Date;
    public description: string;
    public imgUrl: string;

    

    constructor(title: string, description: string, date: Date, autor: string, imgUrl: string) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.imgUrl = imgUrl;
    }
}