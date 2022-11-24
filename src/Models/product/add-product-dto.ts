export class AddProductDto {
    title: string;
    description: string;
    isActive: boolean;
    price: number;
    categoryId: number;
    brandId: number;
    productImage: File;
}
