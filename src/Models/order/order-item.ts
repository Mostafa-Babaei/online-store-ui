import { ProductDto } from "../product/product-dto";

export interface OrderItem {
    id: number;
    quantity: number;
    basePrice: number;
    totalPrice: number;
    productId: number;
    product: ProductDto;
    orderId: number;
}
