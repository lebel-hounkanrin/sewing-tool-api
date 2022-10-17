import { IAtelier } from 'src/core/interfaces/atelier.interface';
import { Users } from 'src/users/entity/users.entity';
import { Column, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IArtisan } from './../../core/interfaces/artisan.interface';
export class Artisan implements IArtisan {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @OneToOne(()=> Users, (user) => user.id)
    user:Users  

    @Column({nullable: true})
    ateliers?: IAtelier[];
}