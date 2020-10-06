export class Product {
    constructor(
        public id: number,
        public name: string,
        public type: string,
        public status: string,
        public price: number,
        public description: string
    ) {}    
}
export const PRODUCTS: Product[] = [
    { id: 1, name: 'Bat', type: 'CRICKET BAT', status: 'In stock', price: 14.05, description: 'To Play cricket.' },
    { id: 2, name: 'Badminton', type: 'Racket', status: 'on order', price: 20.05, description: 'To Play badminton.' },
    { id: 3, name: 'Mobile', type: 'To Communicate', status: 'In stock', price: 24.05, description: 'To Talk.' },
    { id: 4, name: 'Television', type: 'To watch movies', status: 'on order', price: 34.05, description: 'To see movies.' },
];