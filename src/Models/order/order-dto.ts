import { OrderItem } from "./order-item";

export interface OrderDto {
    id: number;
    description: string;
    orderNumber: string;
    state: number;
    isPayment: boolean;
    isActive: boolean;
    price: number;
    orderItem: OrderItem[];
}
