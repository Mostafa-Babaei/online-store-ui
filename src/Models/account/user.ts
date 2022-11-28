import { SelectItem } from "../common/select-item";

export class User {
     id: string;
     userId: string;
     fullname: string;
     registerAt: Date;
     lastLogin?: Date;
     updateAt: Date;
     mobile: string;
     email: string;
     avatar: string;
     nationalCode: string;
     isActive: boolean;
     role: SelectItem[];
}
