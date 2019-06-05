export class Service {
    public title: string;
    public city: string;
    public description: string;
    public logoUrl: string;

    constructor(title: string, city: string, description: string, logoUrl: string) {
        this.title = title;
        this.city = city;
        this.description = description;
        this.logoUrl = logoUrl;
    }
}