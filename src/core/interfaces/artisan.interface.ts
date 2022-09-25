import { IAtelier } from "./atelier.interface";
import { IBaseEntity } from "./ibase.entity";
import { IUser } from "./users.interface";

export interface IArtisan extends IBaseEntity{
    user: IUser
    ateliers?: IAtelier[]
}