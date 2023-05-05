export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: ProductCategory;
    image: string;
}

export enum ProductCategory {
    WOMEN = 'Women',
    MEN = 'Men',
    CHILDREN = 'Children'
}