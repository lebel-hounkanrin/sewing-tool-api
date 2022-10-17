import { IAtelier } from 'src/core/interfaces/atelier.interface';
import { Users } from 'src/users/entity/users.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IArtisan } from './../../core/interfaces/artisan.interface';

@Entity()
export class Artisan implements IArtisan {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @OneToOne(()=> Users, {eager: true})
    @JoinColumn()
    user:Users  

    @Column({type: "varchar", nullable: true})
    ateliers?: IAtelier[];
}