export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Dawn of the Aspects',
            author: 'Richard A. Knaak',
            price: 24,
            coverImage: 'https://m.media-amazon.com/images/I/61ZrZ7RZR0L.jpg'
        },
        {
            id: 2,
            title: 'Rise of the Lich King',
            author: 'Christie Golden',
            price: 43,
            coverImage: 'https://m.media-amazon.com/images/I/51Rj36drGHL.jpg'
        },
        {
            id: 3,
            title: 'Before the Storm: A Novel',
            author: 'Christie Golden',
            price: 50,
            coverImage: 'https://m.media-amazon.com/images/I/51q0QN9K42L.jpg'
        },
        {
            id: 4,
            title: 'War of the Ancients',
            author: 'Richard A. Knaak',
            price: 25,
            coverImage: 'https://m.media-amazon.com/images/I/51lulgUowcL.jpg'
        },
        {
            id: 5,
            title: 'Jaina Proudmoore: Tides of War',
            author: 'Christie Golden',
            price: 20,
            coverImage: 'https://m.media-amazon.com/images/I/61uE962flSL.jpg'
        },
        {
            id: 6,
            title: 'Illidan',
            author: 'William King',
            price: 30,
            coverImage: 'https://m.media-amazon.com/images/I/61L82enJ-TL.jpg'
        },
];

    getBooks() {
        return new Promise(( resolve, reject ) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(this.data);
                }
            }, 700);
        });
    }
}