import { IAtelier } from "./atelier.interface";
import { IBaseEntity } from "./ibase.entity";
import { IUser } from "./users.interface";

export interface Apprenti extends IBaseEntity{
    user: IUser
    atelier: IAtelier
}