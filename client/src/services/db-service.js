export default class DBService {

    data = [
        {
            id: 1,
            title: 'BLASTER NERF ELITE DISRUPTOR',
            price: 345,
            imgUrl: 'https://nerf.com.ua/wp-content/uploads/2017/04/test-2.jpg'
        },
        {
            id: 2,
            title: 'BLASTER NERF ELITE SURGEFIRE',
            price: 745,
            imgUrl: 'https://nerf.com.ua/wp-content/uploads/2018/02/E0011.jpg'
        }
    ];

    getData() {
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.75) {
                    resolve(this.data)
                } else {
                    reject(new Error('Something bed happened'));
                }
            }, 700)
        }))
    };
}