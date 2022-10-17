import { Artisan } from './../../artisan/entity/artisan.entity';
import { type } from 'os';
import { IArtisan } from 'src/core/interfaces/artisan.interface';
import { IAtelier } from 'src/core/interfaces/atelier.interface';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Atelier implements IAtelier{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "varchar"})
    name: string;

    @ManyToOne(() => Artisan, (artisan) => artisan.ateliers)
    owner: IArtisan;

    @Column({type: "varchar"})
    ifu: string;

    @Column({type: "boolean"})
    isActive: boolean;

    @Column({type: "varchar"})
    pays: string;

    @Column({type: "varchar"})
    ville: string;

    @Column({type: "varchar"})
    quartier: string;

}