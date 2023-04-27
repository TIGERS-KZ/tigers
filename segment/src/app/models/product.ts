export interface Product {
    id: Number;
    name: string;
    description: string;
    price: Number;
    category: ProductCategory;
}

export enum ProductCategory {
    WOMEN = 'Women',
    MEN = 'Men',
    CHILDREN = 'Children'
}