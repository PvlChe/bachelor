export class Event {
    public title: string;
    public city: string;
    public date: string;
    public description: string;
    public owner: string;
    public phone: string;
    public adress: string;
    public members: number;
    public time: string;
    

    constructor(title: string, city: string, description: string, date: string, owner: string, phone: string, adress: string, time: string) {
        this.title = title;
        this.city = city;
        this.description = description;
        this.date = date;
        this.owner = owner;
        this.phone = phone;
        this.adress = adress;
        this.time = time;
        this.members = 1;
    }
}