import { Users } from "src/users/entity/users.entity";
import { IAtelier } from "./atelier.interface";
import { IBaseEntity } from "./ibase.entity";

export interface Apprenti extends IBaseEntity{
    user: Users
    atelier: IAtelier
}