import { ProductDto } from "../product/product-dto";

export class HomeRequestDto {
    count: number = 10;
    page: number = 1;
    numberOfPage: number;
    totalCount: number;
    products: ProductDto[];
    brandFilter?: number;
    categoryFilter?: number;
    searchText?: string;
}
