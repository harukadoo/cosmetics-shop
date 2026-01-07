export interface IPerfume {
    id: number;
    title: string;
    price: number;
    currency: string;
    image: string;
    volume: string;
    gender: 'male' | 'female' | 'unisex'; 
    description: string;
}