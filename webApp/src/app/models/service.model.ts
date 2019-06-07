export class Service {
    public title: string;
    public city: string;
    public description: string;
    public logoUrl: string;
    public phone: string;
    public name: string;
    public time: string;
    public adress: string;
    public isShop: boolean;
    public isRent: boolean;
    public isService: boolean;


    constructor(title: string, city: string, description: string, logoUrl: string, phone: string, name: string, time: string, adress: string, isShop: boolean, isRent: boolean, isService: boolean) {
        this.title = title;
        this.city = city;
        this.description = description;
        this.logoUrl = logoUrl;
        this.phone = phone;
        this.name = name;
        this.time = time;
        this.adress = adress;
        this.isShop = isShop;
        this.isRent = isRent;
        this.isService = isService;
    }
}