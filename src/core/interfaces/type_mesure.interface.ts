import { IBaseEntity } from "./ibase.entity"
import { ItemplateModel } from "./itemplate_model"

export interface ITypeMesure extends IBaseEntity{
    template_model: ItemplateModel
    designation: string
    description: string
    valeur: number
}