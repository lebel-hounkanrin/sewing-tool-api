import { IArtisan } from "./artisan.interface";
import { IBaseEntity } from "./ibase.entity";

export interface IAtelier extends IBaseEntity{
    name: string
    owner: IArtisan
    ifu: string
    isActive: boolean
}