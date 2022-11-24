import { OrderItem } from "./order-item";

export interface OrderDto {
    Id: number;
    Description: string;
    OrderNumber: string;
    State: number;
    IsPayment: boolean;
    IsActive: boolean;
    Price: number;
    OrderItem: OrderItem[];
}
