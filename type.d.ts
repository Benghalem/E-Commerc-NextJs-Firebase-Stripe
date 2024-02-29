export interface Product {
    _id: number;
    title: string;
    isNew: boolean;
    oldPrice: number;
    description: string;
    price: number;
    brand: string;
    category: string;
    image: string;
} [];

export interface Item {
    _id: number;
    title: string;
    description: string;
    oldPrice: number;
    price: number;
    brand: string;
    image: string;
    isNew: boolean;
    category: string;
} [];