import { Users } from "src/users/entity/users.entity";
import { IAtelier } from "./atelier.interface";
import { IBaseEntity } from "./ibase.entity";

export interface IArtisan extends IBaseEntity{
    user: Users
    ateliers?: IAtelier[]
}