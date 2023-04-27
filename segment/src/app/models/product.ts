export interface Product {
    id: Number;
    name: string;
    description: string;
    price: Number;
    type: ProductType;
}

export enum ProductType {
    WOMEN = 'Women',
    MEN = 'Men',
    CHILDREN = 'Children'
}