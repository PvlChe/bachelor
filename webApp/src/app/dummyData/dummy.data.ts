export class DummyData {
    public events;
    public services;


    constructor() {
        let date = new Date;
        
        this.events = [
            {
                title: 'Marathon Berlin 2019',
                city: 'Berlin',
                description: 'First bike Marathon in berlin seit 2001. First bike Marathon in berlin seit 2001. First bike Marathon in berlin seit 2001. First bike Marathon in berlin seit 2001. First bike Marathon in berlin seit 2001.',
                date: date.getDate(),
                owner: 'Pavel Che',
                phone: '+49-176-305-91-244',
                adress: 'Patsdamer Straße 43, 10895 Berlin',
                time: '11:00'
            }, 
            {
                title: 'Fahrrad Kampf in der Mitte',
                city: 'Hamburg',
                description: 'Unvergesslicher FahrradKampf in Hamburg 2019, nicht verpassen. Unvergesslicher FahrradKampf in Hamburg 2019, nicht verpassen. Unvergesslicher FahrradKampf in Hamburg 2019, nicht verpassen. Unvergesslicher FahrradKampf in Hamburg 2019, nicht verpassen. Unvergesslicher FahrradKampf in Hamburg 2019, nicht verpassen',
                date: Date.now(),
                owner: 'Vital Che',
                phone: '+49-176-305-91-244',
                adress: 'Hamburger Platz 43, 10895 Hamburg',
                time: '11:00'
            }, 
            {
                title: 'Fahrradfußball',
                city: 'Berlin',
                description: 'First bike Marathon in berlin seit 2001. First bike Marathon in berlin seit 2001. First bike Marathon in berlin seit 2001. First bike Marathon in berlin seit 2001. First bike Marathon in berlin seit 2001.',
                date: new Date(12312312312312312),
                owner: 'Sahn ko',
                phone: '+49-176-305-91-244',
                adress: 'Patsdamer Straße 43, 10895 Berlin',
                time: '13:00'
            }

        ], 

        this.services = [
            {
                title: 'Cube Store', 
                city: 'Minsk', 
                description: 'The best Bike Shop in the World. Everything what you need aroun your bike you can find here! The best Bike Shop in the World. Everything what you need aroun your bike you can find here! The best Bike Shop in the World.', 
                logoUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg', 
                phone: '+49-123-22-2312-2', 
                name: 'Vitaly', 
                time: '8:00 - 22:00', 
                adress: 'Centr goroda 1, Minsk', 
                isShop:  true, 
                isRent:  true, 
                isService:  true
            },
            {
                title: 'Prosto Service', 
                city: 'Grodno', 
                description: 'Prosto Service iz grodno. Chisto chinim veliki da i vse. No u nas prikolno :)', 
                logoUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg', 
                phone: '+49-123-22-2312-2', 
                name: 'Artem', 
                time: '8:00 - 22:00', 
                adress: 'ulica Bogatyrskaya 1, Grodno', 
                isShop:  false, 
                isRent:  false, 
                isService:  true
            },
            {
                title: 'Rent Bike', 
                city: 'Minsk', 
                description: 'Mesto gde ty mozhesh arendovat moy vel i pokatatsya na nem skolko hochesh', 
                logoUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg', 
                phone: '+49-123-22-2312-2', 
                name: 'Anton', 
                time: '8:00 - 22:00', 
                adress: 'ul Gorodskaya 1, Minsk', 
                isShop:  false, 
                isRent:  true, 
                isService:  false
            },
            {
                title: 'Rider', 
                city: 'Mogilev', 
                description: 'Prosto tochkar po velam v mogileve, prihodi vse sdelaem kak nado, a eje my service', 
                logoUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg', 
                phone: '+49-123-22-2312-2', 
                name: 'Igor', 
                time: '8:00 - 22:00', 
                adress: 'ul Gorodskaya 1, Mogilev', 
                isShop:  true, 
                isRent:  false, 
                isService:  false
            },
            {
                title: 'Rent Bike', 
                city: 'Minsk', 
                description: 'Mesto gde ty mozhesh arendovat moy vel i pokatatsya na nem skolko hochesh', 
                logoUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg', 
                phone: '+49-123-22-2312-2', 
                name: 'Anton', 
                time: '8:00 - 22:00', 
                adress: 'ul Gorodskaya 1, Minsk', 
                isShop:  false, 
                isRent:  true, 
                isService:  false
            }
        ]
    }
}