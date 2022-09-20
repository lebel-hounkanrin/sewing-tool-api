import { IBaseEntity } from "./ibase.entity";

export interface IUser extends IBaseEntity {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    profile: string;
}