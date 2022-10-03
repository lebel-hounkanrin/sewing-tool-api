import { IAtelier } from 'src/core/interfaces/atelier.interface';
import { Users } from 'src/users/entity/users.entity';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { IArtisan } from './../../core/interfaces/artisan.interface';
export class Artisan implements IArtisan {
    @PrimaryGeneratedColumn("uuid")
    id: string
    user:Users  

    @Column({nullable: true})
    ateliers?: IAtelier[];
}