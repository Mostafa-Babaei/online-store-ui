import { ProductDto } from "../product/product-dto";

export interface CartDto {
    id: number;
    productId: number;
    title: string;
    count: number;
    price: number;
    totalPrice: number;
    userId: string;
}
