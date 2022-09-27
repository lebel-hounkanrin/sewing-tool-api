import { IBaseEntity } from "./ibase.entity";

export interface IUser extends IBaseEntity {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    profile?: string;
}