import { IAtelier } from "./atelier.interface";
import { IClient } from "./client.interface";
import { IBaseEntity } from "./ibase.entity";

export interface ICommande extends IBaseEntity{
    client: IClient
    atelier: IAtelier
    dateCommande: Date
    dateLivraison: Date
    commentaire: string
}