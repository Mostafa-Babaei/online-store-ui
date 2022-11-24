import { ProductDto } from "../product/product-dto";

export interface OrderItem {
    Id: number;
    Quantity: number;
    BasePrice: number;
    TotalPrice: number;
    ProductId: number;
    Product: ProductDto;
    OrderId: number;
}
