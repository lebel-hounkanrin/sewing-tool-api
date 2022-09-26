import { ICommande } from "./commande.interface";
import { IBaseEntity } from "./ibase.entity";

export interface ModeleCommande extends IBaseEntity{
    commande: ICommande
    nom: string
    description: string
}